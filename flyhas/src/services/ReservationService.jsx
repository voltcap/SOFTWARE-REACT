import axios from "axios";

const RESERVATION_API = "http://localhost:8080/api/reservations";
const PAYMENT_API = "http://localhost:8080/api/payment";

const submitReservation = (reservationDataArray) => {
    return axios.post(`${RESERVATION_API}`, reservationDataArray);
};

const completePayment = (reservationId, cardDetails) => {
    const paymentPayload = {
        reservationId,
        ...cardDetails
    };
    return axios.post(`${PAYMENT_API}/checkout`, paymentPayload);
};

export default {
    submitReservation,
    completePayment,
};