import axios from "axios";
import BASE_URL from "./BaseUrlService";

const ENERGIE_API_BASE_URL = BASE_URL + "energies";

// function for login
const getAllEnergies = () => {
    return axios.get(ENERGIE_API_BASE_URL);
}

const deleteEnergie = (idEnergie) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.delete(ENERGIE_API_BASE_URL + "/" + idEnergie, config);
}

const updateEnergie = (idEnergie, energie) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.put(ENERGIE_API_BASE_URL + "/" + idEnergie, energie, config);
}

const insertEnergie = (energie) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.post(ENERGIE_API_BASE_URL, energie, config);
}

const EnergieService = {
    getAllEnergies,
    deleteEnergie,
    updateEnergie,
    insertEnergie
}

export default EnergieService;