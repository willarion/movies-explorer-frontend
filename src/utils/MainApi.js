import {mainApiSettings} from './constants'

class Api {
  
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _handleOriginalResponse(res) {
    
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  changeLikeCardStatus({token, isLiked, movieId, cardInfo}) {
    console.log(isLiked, movieId, cardInfo);
    if (!isLiked) { // false значит, что лайка нет
      //putCardLike

      return fetch(`${this._baseUrl}/movies`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Linux; ; ) AppleWebKit/ (KHTML, like Gecko) Chrome/ Mobile Safari/; Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1; Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.65 Mobile Safari/537.36'
          },
        body: JSON.stringify(cardInfo)
      })
      .then(this._handleOriginalResponse);
    } else {
      //deleteCardLike

      return fetch(`${this._baseUrl}/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${token}`
          }
      })
      .then(this._handleOriginalResponse);
    }
  }

}

const mainApi = new Api(mainApiSettings);

export default mainApi; 
