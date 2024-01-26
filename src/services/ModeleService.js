import axios from "axios";

const MODELE_API_BASE_URL = "http://localhost:8080/api/modeles";

// function for login
const getAllModeles = () => {
    return axios.get(MODELE_API_BASE_URL);
}

const deleteModele = (idModele) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.delete(MODELE_API_BASE_URL + "/" + idModele, config);
}

const updateModele = (idModele, modele) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.put(MODELE_API_BASE_URL + "/" + idModele, modele, config);
}

const insertModele = (modele) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.post(MODELE_API_BASE_URL, modele, config);
}

const ModeleService = {
    getAllModeles,
    deleteModele,
    updateModele,
    insertModele
}

export default ModeleService;