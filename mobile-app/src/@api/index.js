import axios from 'axios';

export const api = axios.create({
  baseURL: `http://localhost:8088/v1/api`
});
