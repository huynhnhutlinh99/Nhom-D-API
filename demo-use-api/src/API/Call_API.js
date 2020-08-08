import axios from 'axios';

//show all
export const fetch_data = () => {
  const req=axios.get(`http://localhost:3000/ourservices`, {

  });
  return req;
};

//delete
export const delete_data = (id) => {
  const req=axios.delete(`http://localhost:3000/ourservices/${id}`, {

  });
  return req;
};

//add
export const add_data = (data) => {
  const req=axios.post(`http://localhost:3000/ourservices`, data);
  return req;
};