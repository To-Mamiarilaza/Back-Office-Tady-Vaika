import axios from "axios";
import BASE_URL from "./BaseUrlService";


const ANNONCE_API_BASE_URL = BASE_URL;

// function for login
const checkIfFavorite = (idAnnonce) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.get(ANNONCE_API_BASE_URL + "annonces/isFavorite/" + idAnnonce, config);
}

const markAsFavorite = (idAnnonce, idUser) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    // update status to 20
    let content = {
        idUsers: idUser,
        status: 1,
        idAnnonce: idAnnonce
    };

    return axios.post(ANNONCE_API_BASE_URL + "annonce_favoriss", content, config);
}

const removeFromFavorite = (idFavorite) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return axios.delete(ANNONCE_API_BASE_URL + "annonce_favoriss/" + idFavorite, config);
}

const AnnonceFavorisService = {
    checkIfFavorite,
    markAsFavorite,
    removeFromFavorite
}

export default AnnonceFavorisService;