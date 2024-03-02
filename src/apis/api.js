import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/attendance'; // Update URL as per your backend

export const fetchAttendance = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addAttendance = async (newAttendance) => {
  try {
    const response = await axios.post(API_BASE_URL, newAttendance);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAttendance = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    throw error;
  }
};

export const updateAttendance = async (id, updatedAttendance) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, updatedAttendance);
    return response.data;
  } catch (error) {
    throw error;
  }
};
