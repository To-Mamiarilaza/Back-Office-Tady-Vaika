import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/";

// function for login
const getUserInformation = (idUser) => {
    return axios.get(USER_API_BASE_URL + "users/" + idUser);
}

const getUserAnnonces = (idUser) => {
    return axios.get(USER_API_BASE_URL + "v_annonce_complets/users/" + idUser);
}


const UserProfileService = {
    getUserInformation,
    getUserAnnonces
}

export default UserProfileService;