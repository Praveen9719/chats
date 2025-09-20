// src/lib/axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api" // Your local backend
      : "https://chats-backend-uue7.onrender.com/api", // Your Render backend
  withCredentials: true,
});




//"http://localhost:5001/api"
