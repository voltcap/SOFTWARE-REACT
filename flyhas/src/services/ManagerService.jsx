import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/managers";

const getAllManagers = () => {
    const token = localStorage.getItem("userToken");
    return axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

const deleteManager = (id) => {
    const token = localStorage.getItem("userToken");
    return axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export default {
    getAllManagers,
    deleteManager,
};