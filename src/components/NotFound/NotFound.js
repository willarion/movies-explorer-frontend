import React from 'react';
import { useHistory } from 'react-router-dom';

function NotFound(props) {
  const history = useHistory();

  return (
    <main className="not-found">
      <div className="not-found__text">
        <p className="not-found__heading">404</p>
        <p className="not-found__subheading">Страница не найдена</p>
      </div>
      <p className="not-found__back-btn" onClick={() =>  history.goBack()}>Назад</p>
    </main>
  );
}

export default NotFound;
