import axios from "axios"

export const fetchCollections = async () => {
    try {
        const response = await axios.get("/api/store/collections");
        const { data } = response;
        if (response.status === 200) return data;
        return { hasError: true, message: response.statusText}
    } catch(error) {
        return { hasError: true, message: error.message };
    }
}