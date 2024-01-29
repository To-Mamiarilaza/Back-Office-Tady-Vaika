import axios from "axios";
import BASE_URL from "./BaseUrlService";


const ANNONCE_API_BASE_URL = BASE_URL;

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

// get all annonce image
const getAnnonceImages = (idAnnonce) => {
    return axios.get(ANNONCE_API_BASE_URL + "photo_annonces/annonce/" + idAnnonce);
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
    getAllAnnonces,
    getAnnonceImages
}

export default AnnonceService;