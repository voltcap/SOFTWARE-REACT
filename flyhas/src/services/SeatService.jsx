// src/services/SeatService.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/seats";

const SeatService = {
    getBookedSeatsByFlightId: async (flightId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/booked/${flightId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default SeatService;