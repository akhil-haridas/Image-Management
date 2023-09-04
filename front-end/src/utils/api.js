import axios from "axios";
import Swal from "sweetalert2";

const API_BASE_URL = "http://localhost:5555/api/images"; 

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add headers or authentication tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Handle successful responses here
    return response.data;
  },
  (error) => {

    // Handle errors here
    return Promise.reject(error);
  }
);

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});


export const uploadImage = async (formData) => {
  try {
    const response = await api.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    Toast.fire({
      icon: "success",
      title: "Image uploaded successfully",
    });
    return response;
  } catch (error) {
     Toast.fire({
       icon: "error",
       text: error.response.data.error,
     });
   
  }
};

export const getImages = async () => {
  try {
    const response = await api.get("/allimages"); 
    return response.docs;
  } catch (error) {
    Toast.fire({
      icon: "error",
      text: "Error fetching images",
    });
    throw error;
  }
};

export const getSingleImage = async (imageId) => {
  try {
    const response = await api.get(`/image/${imageId}`);
    return response;
  } catch (error) {
   Toast.fire({
     icon: "error",
     text: "Error fetching image",
   });
    throw error;
  }
};

export default api;
