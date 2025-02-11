const axios = require('axios');

class APIController {
  constructor(baseURL, token = '') {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
  }

  async get(endpoint) {
    return await this.client.get(endpoint);
  }

  async post(endpoint, data) {
    return await this.client.post(endpoint, data);
  }
}

module.exports = APIController;
