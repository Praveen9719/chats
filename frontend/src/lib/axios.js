import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5001"  // Local backend URL for development
    : "https://chats-backend-uue7.onrender.com",  // Production backend URL
  withCredentials: true,
});



//"http://localhost:5001/api"
