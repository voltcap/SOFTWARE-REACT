
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

// Login
const login = (email, password) => {
    return axios
        .post(`${API_URL}/login`, { email, password }, {
            headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("userToken", response.data.token);
                localStorage.setItem("userRole", response.data.role);
                localStorage.setItem("userEmail", response.data.email);
                localStorage.setItem("userName", response.data.firstName);
            }
            return response.data;
        });
};

const registerCustomer = (customerData) => {
    return axios.post(`${API_URL}/register/customer`, customerData, {
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
        const { token, email, role, firstName } = response.data;
        localStorage.setItem("userToken", token);
        localStorage.setItem("userRole", role);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userName", firstName);
        return response.data;
    });
};

// Logout
const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
};


export default {
    login,
    registerCustomer,
    logout,
};