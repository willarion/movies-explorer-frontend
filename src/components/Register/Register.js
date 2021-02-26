import React from 'react';
import { Link } from 'react-router-dom';
import registerLogo from '../../images/logo-header.svg';

function Register(props) {
  return (
    <main className="register">
      <div style={{ backgroundImage: `url(${registerLogo})` }} className="register__logo" />
      <p className="register__greeting">Привет, Виталий{props.name}!</p>
      <form className="register__form">
        <fieldset className="register__form-fields">
          <label className="register__input-field" for="name">
            Имя
            <input className="register__input-line" id="input-name" type="text" name="name" required="" minlength="2" maxlength="40" 
            // value=""
            />
          </label>
          <label className="register__input-field" for="email">
            Почта
            <input type="email" name="email" className="register__input-line" id="input-email" required="" minlength="2" maxlength="20" 
            // value=""
            />
          </label>
          <label className="register__input-field" for="password">
            Пароль
            <input type="password" name="password" className="register__input-line" id="input-password" required="" minlength="8"
            // value=""
            />
          </label>
          <p className="register__input-error register__general-error_visible">dfghdfgh</p>
        </fieldset>
        <div className="register__form-btns">
          <button className="register__save-btn" type="submit">Зарегистрироваться</button>
          <p className="register__login" type="button">Уже зарегистрированы? <Link className="register__login-btn">Войти</Link></p>
        </div>  
      </form>
    </main>
  );
}

export default Register;
