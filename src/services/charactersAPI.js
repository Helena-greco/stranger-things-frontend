import axios from 'axios';

const { REACT_APP_HAWKINS_URL, REACT_APP_HAWKINS_TIMEOUT } = process.env;

const DEFAULT_TIMEOUT = 30000;
class CharactersService {
  constructor({ url = REACT_APP_HAWKINS_URL,
    timeout = REACT_APP_HAWKINS_TIMEOUT || DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
