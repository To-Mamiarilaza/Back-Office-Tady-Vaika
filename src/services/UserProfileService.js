import axios from "axios";
import BASE_URL from "./BaseUrlService";

const USER_API_BASE_URL = BASE_URL;

// function for login
const getUserInformation = (idUser) => {
    return axios.get(USER_API_BASE_URL + "v_user_complets/" + idUser);
}

const getUserAnnonces = (idUser) => {
    return axios.get(USER_API_BASE_URL + "v_annonce_complets/users/" + idUser);
}


const UserProfileService = {
    getUserInformation,
    getUserAnnonces
}

export default UserProfileService;