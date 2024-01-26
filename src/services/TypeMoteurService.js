import axios from "axios";

const TYPE_MOTEUR_API_BASE_URL = "http://localhost:8080/api/type_moteurs";

// function for login
const getAllTypeMoteurs = () => {
    return axios.get(TYPE_MOTEUR_API_BASE_URL);
}

const deleteTypeMoteur = (idTypeMoteur) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.delete(TYPE_MOTEUR_API_BASE_URL + "/" + idTypeMoteur, config);
}

const updateTypeMoteur = (idTypeMoteur, typeMoteur) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.put(TYPE_MOTEUR_API_BASE_URL + "/" + idTypeMoteur, typeMoteur, config);
}

const insertTypeMoteur = (typeMoteur) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.post(TYPE_MOTEUR_API_BASE_URL, typeMoteur, config);
}

const TypeMoteurService = {
    getAllTypeMoteurs,
    deleteTypeMoteur,
    updateTypeMoteur,
    insertTypeMoteur
}

export default TypeMoteurService;