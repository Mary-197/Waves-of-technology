import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // ✅ PORTA CERTA DO BACKEND
});

export default api;
