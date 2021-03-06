import React from 'react';
import { Link } from 'react-router-dom';
import loginLogo from '../../images/logo-header.svg';
import {useFormWithValidation} from '../../utils/FormValidation';


function Login(props) {
  const formValidation = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    props.onSignIn(formValidation.values.password, formValidation.values.email, formValidation.resetForm);
  }

  return (
    <main className="login">
      <div style={{ backgroundImage: `url(${loginLogo})` }} className="login__logo" />
      <p className="login__greeting">Рады видеть!</p>
      <form action="#" className="login__form" onSubmit={handleSubmit} noValidate>
        <fieldset className="login__form-fields">
          <label className="login__input-field" htmlFor="email">
            E-mail
            <input type="email" name="email" className="login__input-line" id="input-email" required minLength="2" maxLength="30" value={formValidation.values.email} onChange={formValidation.handleChange} readOnly={props.readOnly} />
            <span className="login__input-error login__input-error_visible">{formValidation.errors.email}</span>
          </label>
          <label className="login__input-field" htmlFor="password">
            Password
            <input type="password" name="password" className="login__input-line" id="input-password" required minLength="8"value={formValidation.values.password} onChange={formValidation.handleChange} readOnly={props.readOnly} />
            <span className="login__input-error login__input-error_visible">{formValidation.errors.password}</span>
          </label>
        </fieldset>
        <div className="login__form-btns">
          <p className="login__input-error login__general-error_visible">{props.message}</p>
          <button className={ !formValidation.isValid ? "login__save-btn login__save-btn_disabled" : "login__save-btn" } type="submit">Sign in</button>
          <p className="login__register" type="button">Don't have account? <Link to="/signup" className="login__login-btn">Sign up</Link></p>
        </div>  
      </form>
    </main>
  );
}

export default Login;
