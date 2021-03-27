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

  getMovieList(token) {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`,
        'User-Agent': 'Mozilla/5.0 (Linux; ; ) AppleWebKit/ (KHTML, like Gecko) Chrome/ Mobile Safari/; Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1; Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.65 Mobile Safari/537.36'
      }
    })
    .then(this._handleOriginalResponse);
  }  
}

const moviesApi = new Api(movieApiSettings);

export default moviesApi; 