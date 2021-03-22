import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const createData = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const readData = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const updateData = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const deleteData = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default {
  createData: createData,
  readData: readData,
  updateData: updateData,
  deleteData: deleteData,
};
