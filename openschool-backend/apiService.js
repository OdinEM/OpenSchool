import axios from 'axios';

const API_URL = 'http://your-backend-url/api';

export const login = (email, password) => {
  return axios.post(`${API_URL}/users/login`, { email, password });
};

export const getCourses = () => {
  return axios.get(`${API_URL}/courses`);
};

export const getPerformance = (studentId) => {
  return axios.get(`${API_URL}/performance/${studentId}`);
};
