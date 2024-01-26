import axios from "axios";

const LOGIN_API_BASE_URL = "http://localhost:8080/api/users";

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