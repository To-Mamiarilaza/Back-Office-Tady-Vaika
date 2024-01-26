import axios from "axios";

const ANNONCE_API_BASE_URL = "http://localhost:8080/api/";

// function for login
const getAnnonceDetail = (idAnnonce) => {
    return axios.get(ANNONCE_API_BASE_URL + "v_annonce_complets/" + idAnnonce);
}

// get all pending annonces
const getPendingAnnonces = () => {
    return axios.get(ANNONCE_API_BASE_URL + "v_annonce_en_attente_validations");
}

// get all annonces
const getAllAnnonces = () => {
    return axios.get(ANNONCE_API_BASE_URL + "v_annonce_complets");
}

const updateAnnonceStatus = (annonce, status) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    // update status to 20
    annonce.status = status;

    return axios.put(ANNONCE_API_BASE_URL + "annonces/" + annonce.id, annonce, config);
}

const AnnonceService = {
    getAnnonceDetail,
    updateAnnonceStatus,
    getPendingAnnonces,
    getAllAnnonces
}

export default AnnonceService;