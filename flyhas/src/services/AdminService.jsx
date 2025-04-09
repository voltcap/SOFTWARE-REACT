import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/admin";

const getProfile = () => {
    return axios.get(`${API_URL}/profile`, { headers: authHeader() });
};

const updateProfile = (data) => {
    return axios.put(`${API_URL}/update`, data, { headers: authHeader() });
};

export default {
    getProfile,
    updateProfile,
};