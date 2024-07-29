import { login, getCourses, getPerformance } from './apiService';

// Example of login usage
const handleLogin = async () => {
  try {
    const response = await login('user@example.com', 'password123');
    console.log(response.data);
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

// Example of fetching courses
const fetchCourses = async () => {
  try {
    const response = await getCourses();
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};
