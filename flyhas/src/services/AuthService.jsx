import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

const login = (email, password) => {
    const mockManager = {
        email: "manager@flyhas.com",
        password: "12345678@{_aA",
        token: "007",
        role: "MANAGER",
        firstName: "Mai",
    };

    return new Promise((resolve, reject) => {
        if (email === mockManager.email && password === mockManager.password) {
            localStorage.setItem("userToken", mockManager.token);
            localStorage.setItem("userRole", mockManager.role);
            localStorage.setItem("userEmail", mockManager.email);
            localStorage.setItem("userName", mockManager.firstName);
            resolve({
                token: mockManager.token,
                role: mockManager.role,
                email: mockManager.email,
                firstName: mockManager.firstName,
            });
        } else {
            reject(new Error("TRY AGAIN!"));
        }
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