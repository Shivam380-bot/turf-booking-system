import axiosInstance from "../api/axiosInstance";

// 🔹 All turfs (admin / testing)
export const getAllTurfs = async () => {
  const response = await axiosInstance.get("/api/turfs");
  return response.data;
};

// 🔹 Only available turfs (landing page)
export const getAvailableTurfs = async () => {
  const response = await axiosInstance.get("/api/turfs/available");
  return response.data;
};

// 🔹 Turf detail by ID
export const getTurfById = async (id) => {
  const response = await axiosInstance.get(`/api/turfs/${id}`);
  return response.data;
};

// 🔹 Turfs by city
export const getTurfsByCity = async (city) => {
  const response = await axiosInstance.get(`/api/turfs/city/${city}`);
  return response.data;
};

// 🔹 Search turf
export const searchTurfs = async (query) => {
  const response = await axiosInstance.get(`/api/turfs/search?q=${query}`);
  return response.data;
};
