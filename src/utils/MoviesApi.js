import {movieApiSettings} from './constants'

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

  getMovieList() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(this._handleOriginalResponse);
  }  
}

const moviesApi = new Api(movieApiSettings);

export default moviesApi; 