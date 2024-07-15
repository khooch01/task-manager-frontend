import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_URL,
});

export const registerUser = (userData) => api.post('/register', userData);
export const loginUser = (userData) => api.post('/login', userData);
export const getTasks = () => api.get('/tasks');
export const createTask = (taskData) => api.post('/tasks', taskData);
export const updateTask = (taskId, taskData) => api.put(`/tasks/${taskId}`, taskData);
export const deleteTask = (taskId) => api.delete(`/tasks/${taskId}`);
export const searchTasks = (query) => api.get(`/tasks/search`, { params: query });
export const setTaskPriority = (taskId, priority) => api.put(`/tasks/${taskId}/priority`, { priority });

export default api;
