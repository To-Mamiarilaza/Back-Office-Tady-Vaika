import axios from "axios";
import BASE_URL from "./BaseUrlService";

const TYPE_ANNONCE_API_BASE_URL = BASE_URL + "type_annonces";

// function for login
const getAllTypeAnnonces = () => {
    return axios.get(TYPE_ANNONCE_API_BASE_URL);
}

const deleteTypeAnnonce = (idTypeAnnonce) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.delete(TYPE_ANNONCE_API_BASE_URL + "/" + idTypeAnnonce, config);
}

const updateTypeAnnonce = (idTypeAnnonce, annonce) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.put(TYPE_ANNONCE_API_BASE_URL + "/" + idTypeAnnonce, annonce, config);
}

const insertTypeAnnonce = (annonce) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.post(TYPE_ANNONCE_API_BASE_URL, annonce, config);
}

const TypeAnnonceService = {
    getAllTypeAnnonces,
    deleteTypeAnnonce,
    updateTypeAnnonce,
    insertTypeAnnonce
}

export default TypeAnnonceService;