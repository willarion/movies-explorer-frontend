import React from 'react';
import { Link } from 'react-router-dom';
import registerLogo from '../../images/logo-header.svg';
import {useFormWithValidation} from '../../utils/FormValidation';


function Register(props) {

  const formValidation = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    props.onSignUp(formValidation.values.password, formValidation.values.email, formValidation.values.name, formValidation.resetForm);

  }

  return (
    <main className="register">
      <div style={{ backgroundImage: `url(${registerLogo})` }} className="register__logo" />
      <p className="register__greeting">Welcome!</p>
      <form action="#" className="register__form" onSubmit={handleSubmit} noValidate>
        <fieldset className="register__form-fields">
          <label className="register__input-field" htmlFor="name">
            Name
            <input className="register__input-line" id="input-name" type="text" name="name" required minLength="2" maxLength="40" value={formValidation.values.name} onChange={formValidation.handleChange} readOnly={props.readOnly} />
            <span className="register__input-error register__input-error_visible">{formValidation.errors.name}</span>
          </label>
          <label className="register__input-field" htmlFor="email">
            E-mail
            <input type="email" name="email" className="register__input-line" id="input-email" required minLength="2" maxLength="30" value={formValidation.values.email} onChange={formValidation.handleChange} readOnly={props.readOnly} />
            <span className="register__input-error register__input-error_visible">{formValidation.errors.email}</span>
          </label>
          <label className="register__input-field" htmlFor="password">
            Password
            <input type="password" name="password" className="register__input-line" id="input-password" required minLength="8" value={formValidation.values.password} onChange={formValidation.handleChange} readOnly={props.readOnly} />
            <span className="register__input-error register__input-error_visible">{formValidation.errors.password}</span>
          </label>
        </fieldset>
        <div className="register__form-btns">
          <p className="register__input-error register__general-error_visible">{props.message}</p>
          <button className={ !formValidation.isValid ? "register__save-btn register__save-btn_disabled" : "register__save-btn" }type="submit" disabled={!formValidation.isValid}>Sign up</button>
          <p className="register__login" type="button">Already a member? <Link to="/signin" className="register__login-btn">Sign in</Link></p>
        </div>  
      </form>
    </main>
  );
}

export default Register;
 