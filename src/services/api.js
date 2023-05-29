import axios from 'axios';

export const fetchContactsApi = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContactsApi = async data => {
  const response = await axios.post('/contacts', data);
  return response.data;
};

export const deleteContactsApi = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
