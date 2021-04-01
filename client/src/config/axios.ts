import axios from 'axios';

export interface ServerResponse<T> {
  data: T;
}

export const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: localStorage.getItem('token'),
  },
});
