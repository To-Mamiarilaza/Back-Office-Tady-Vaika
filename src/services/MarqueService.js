import axios from "axios";

const ENERGIE_API_BASE_URL = "http://localhost:8080/api/marques";

// function for login
const getAllMarques = () => {
    return axios.get(ENERGIE_API_BASE_URL);
}

const deleteMarque = (idMarque) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.delete(ENERGIE_API_BASE_URL + "/" + idMarque, config);
}

const updateMarque = (idMarque, marque) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.put(ENERGIE_API_BASE_URL + "/" + idMarque, marque, config);
}

const insertMarque = (marque) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.post(ENERGIE_API_BASE_URL, marque, config);
}

const MarqueService = {
    getAllMarques,
    deleteMarque,
    updateMarque,
    insertMarque
}

export default MarqueService;