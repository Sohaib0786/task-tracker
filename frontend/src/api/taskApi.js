import axios from "axios";

const API = "http://localhost:5000/api/tasks";

export const fetchTasks = () => axios.get(API);
export const createTask = (data) => axios.post(API, data);
export const updateTask = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteTask = (id) => axios.delete(`${API}/${id}`);
