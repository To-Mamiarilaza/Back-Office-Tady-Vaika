import axios from "axios";

const TAILLE_API_BASE_URL = "http://localhost:8080/api/tailles";

// function for login
const getAllTailles = () => {
    return axios.get(TAILLE_API_BASE_URL);
}

const deleteTaille = (idTaille) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.delete(TAILLE_API_BASE_URL + "/" + idTaille, config);
}

const updateTaille = (idTaille, taille) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.put(TAILLE_API_BASE_URL + "/" + idTaille, taille, config);
}

const insertTaille = (taille) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.post(TAILLE_API_BASE_URL, taille, config);
}

const TailleService = {
    getAllTailles,
    deleteTaille,
    updateTaille,
    insertTaille
}

export default TailleService;