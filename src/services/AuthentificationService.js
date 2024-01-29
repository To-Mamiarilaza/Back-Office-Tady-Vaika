import axios from "axios";
import BASE_URL from "./BaseUrlService";

const LOGIN_API_BASE_URL = BASE_URL + "users";

// function for login
const login = (email, mdp) => {
    return axios.post(LOGIN_API_BASE_URL + "/login", {
        email: email,
        mdp: mdp
    });
}

const AuthentificationService = {
    login
}

export default AuthentificationService;