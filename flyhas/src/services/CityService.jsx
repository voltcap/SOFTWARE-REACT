import axios from "axios";

const API_URL = "http://localhost:8080/api/cities";

const getAllCities = () => {
    return axios.get(API_URL);
};

const addCity = (city) => {
    return axios.post(API_URL, city, {
        headers: { "Content-Type": "application/json" },
    });
};

const deleteCity = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    getAllCities,
    addCity,
    deleteCity,
};