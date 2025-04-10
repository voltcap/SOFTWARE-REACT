export const getUserFromToken = () => {
    const token = localStorage.getItem("userToken");
    if (!token) return null;

    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload;
    } catch (error) {
        console.error("Invalid token", error);
        return null;
    }
};