import axios from "axios";

const API_URL = "http://localhost:8080/api/flights";

export const getFlights = () => axios.get(API_URL);

export const createFlight = (flightData) => axios.post(API_URL, flightData);


export const getFlightById = (id) => axios.get(`${API_URL}/${id}`);