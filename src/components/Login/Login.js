import React from 'react';
import { Link } from 'react-router-dom';
import loginLogo from '../../images/logo-header.svg';

function Login(props) {
  return (
    <main className="login">
      <div style={{ backgroundImage: `url(${loginLogo})` }} className="login__logo" />
      <p className="login__greeting">Рады видеть!</p>
      <form className="login__form">
        <fieldset className="login__form-fields">
          <label className="login__input-field" for="email">
            E-mail
            <input type="email" name="email" className="login__input-line" id="input-email" required="" minlength="2" maxlength="20" 
            // value=""
            />
          </label>
          <label className="login__input-field" for="password">
            Пароль
            <input type="password" name="password" className="login__input-line" id="input-password" required="" minlength="8"
            // value=""
            />
          </label>
          <p className="login__input-error login__general-error_visible">dfghdfgh</p>
        </fieldset>
        <div className="login__form-btns">
          <button className="login__save-btn" type="submit">Войти</button>
          <p className="login__register" type="button">Ещё не зарегистрированы? <Link to="/signup" className="login__login-btn">Регистрация</Link></p>
        </div>  
      </form>
    </main>
  );
}

export default Login;
