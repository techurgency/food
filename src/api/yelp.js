import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer SF_bFqRBzQ1XMFsvVxyLFUsrfh_AoYNypm3zf2VoF4vmnfR0m8dZsQLa11YW0KAj2kJdkprAyKuRWrUqpGJIfbt2sqy-P8FrrDQDxNWyBCxd3JlwvL2xS687vF6oX3Yx'
  }
});
