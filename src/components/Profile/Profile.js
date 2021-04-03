import React, { useEffect } from 'react';
import {useFormWithValidation} from '../../utils/FormValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const formValidation = useFormWithValidation();

  const [nameChangeHappened, setNameChangeHappened] = React.useState(false);
  const [emailChangeHappened, setEmailChangeHappened] = React.useState(false);

  const [readOnly, setReadOnly] = React.useState(true);

  function handleUpdate() {
    setReadOnly(false);
  }

  function handleNameChange(e) {
    setNameChangeHappened(true);
    formValidation.handleChange(e);
  }

  function handleEmailChange(e) {
    setEmailChangeHappened(true);
    formValidation.handleChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const userInfoObj = {
      email: formValidation.values.email ? formValidation.values.email : currentUser.email,
      name: formValidation.values.name ? formValidation.values.name : currentUser.name
    }

    props.onProfileUpdate(userInfoObj);    

    formValidation.resetForm();
    setReadOnly(true);
    setEmailChangeHappened(false);
    setNameChangeHappened(false);
  }

  return (
    <main className="profile">
      <p className="profile__greeting">Привет, {currentUser.name}!</p>
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
        <fieldset className="profile__form-fields">
          <label className="profile__input-field" htmlFor="name">
            Имя
            <input className="profile__input-line" 
            id="input-name" type="text" name="name" required="" minLength="2" maxLength="40" required value={nameChangeHappened ? formValidation.values.name : (currentUser.name ? currentUser.name : '')} readOnly={readOnly} onChange={handleNameChange} />
            <span className="profile__input-error" id="input-name-error profile__input-error_visible">{formValidation.errors.name}</span>
          </label>
          <label className="profile__input-field" htmlFor="email">
            Почта
            <input type="email" name="email" className="profile__input-line" id="input-email" required="" minLength="2" maxLength="20" required value={emailChangeHappened ? formValidation.values.email : (currentUser.email ? currentUser.email : '')} readOnly={readOnly} onChange={handleEmailChange} />
            <span className="profile__input-error" id="input-email-error">{formValidation.errors.email}</span>
          </label>
        </fieldset>
        <div className="profile__form-btns">
          <p className="profile__general-error profile__general-error_visible">{props.message}</p>
          <button type="submit" className={ !formValidation.isValid ? "profile__save-btn profile__form-btn profile__save-btn_state_disabled" : "profile__save-btn profile__form-btn"} disabled={!formValidation.isValid ? true : false}>Сохранить</button>
          <button className="profile__edit-btn profile__form-btn" type="button" onClick={handleUpdate}>Редактировать</button>
          <button className="profile__exit-btn profile__form-btn" type="button" onClick={props.onSignOut}>Выйти из аккаунта</button>
        </div>  
      </form>
    </main>
  );
}

export default Profile;
