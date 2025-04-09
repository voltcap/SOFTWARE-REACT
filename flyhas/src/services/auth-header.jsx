export default function authHeader() {
    const token = localStorage.getItem("userToken");

    if (token) {
        return {
            Authorization: 'Bearer ' + token,
        };
    } else {
        return {};
    }
}