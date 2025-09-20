import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chats-backend-uue7.onrender.com" : "/api", // Adjust the backend URL 
  withCredentials: true,
});


//"http://localhost:5001/api"
