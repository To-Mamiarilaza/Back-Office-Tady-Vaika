import axios from "axios";
import BASE_URL from "./BaseUrlService";

const COULEUR_API_BASE_URL = BASE_URL + "couleurs";

// function for login
const getAllCouleurs = () => {
    return axios.get(COULEUR_API_BASE_URL);
}

const deleteCouleur = (idCouleur) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.delete(COULEUR_API_BASE_URL + "/" + idCouleur, config);
}

const updateCouleur = (idCouleur, couleur) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.put(COULEUR_API_BASE_URL + "/" + idCouleur, couleur, config);
}

const insertCouleur = (couleur) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.post(COULEUR_API_BASE_URL, couleur, config);
}

const CouleurService = {
    getAllCouleurs,
    deleteCouleur,
    updateCouleur,
    insertCouleur
}

export default CouleurService;