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

// get annonces with filter
const getFilteredAnnonces = (filter) => {
    return axios.post(ANNONCE_API_BASE_URL + "annonce_filter", filter);
}

// get all annonce image
const getAnnonceImages = (idAnnonce) => {
    return axios.get(ANNONCE_API_BASE_URL + "photo_annonces/annonce/" + idAnnonce);
}

// get all annonce for user
const getAllPublishedAnnonce = (page, size) => {
    return axios.get(ANNONCE_API_BASE_URL + "v_annonce_complets/non_vendu?page=" + page + "&size=" + size);
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
    getAnnonceImages,
    getAllPublishedAnnonce,
    getFilteredAnnonces
}

export default AnnonceService;