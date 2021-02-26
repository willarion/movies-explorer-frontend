import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
  return (
    <main className="not-found">
      <div className="not-found__text">
        <p className="not-found__heading">404</p>
        <p className="not-found__subheading">Страница не найдена</p>
      </div>
      <Link className="not-found__back-btn">Назад</Link>
    </main>
  );
}

export default NotFound;
