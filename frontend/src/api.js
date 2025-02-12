import axios from "axios";

const API_URL = "http://localhost:5000/api/items";

export const getItems = async () => axios.get(API_URL);
export const createItem = async (name) => axios.post(API_URL, { name });
export const updateItem = async (id, name) =>
  axios.put(`${API_URL}/${id}`, { name });
export const deleteItem = async (id) => axios.delete(`${API_URL}/${id}`);
