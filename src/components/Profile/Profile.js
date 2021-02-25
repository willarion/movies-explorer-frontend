import React from 'react';

function Profile(props) {
  return (
    <main className="profile">
      <p className="profile__greeting">Привет, Виталий{props.name}!</p>
      <form className="profile__form">
        <fieldset className="profile__form-fields">
          <label className="profile__input-field" for="name">
            Имя
            <input className="profile__input-line" type="text" name="name" required="" minlength="2" maxlength="40" 
            // value=""
            />
          </label>
          <label className="profile__input-field" for="email">
            Почта
            <input type="email" name="email" className="profile__input-line" required="" minlength="2" maxlength="20" 
            // value=""
            />
          </label>
        </fieldset>
        <div className="profile__form-btns">
          <button className="profile__save-btn profile__form-btn profile__form-btn_disabled" type="submit">Сохранить</button>
          <button className="profile__edit-btn profile__form-btn" type="button">Редактировать</button>
          <button className="profile__exit-btn profile__form-btn" type="button">Выйти из аккаунта</button>
        </div>  
      </form>
    </main>
  );
}

export default Profile;
