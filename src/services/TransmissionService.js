import axios from "axios";

const TRANSMISSION_API_BASE_URL = "http://localhost:8080/api/transmissions";

// function for login
const getAllTransmissions = () => {
    return axios.get(TRANSMISSION_API_BASE_URL);
}

const deleteTransmission = (idTransmission) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.delete(TRANSMISSION_API_BASE_URL + "/" + idTransmission, config);
}

const updateTransmission = (idTransmission, transmission) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.put(TRANSMISSION_API_BASE_URL + "/" + idTransmission, transmission, config);
}

const insertTransmission = (transmission) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.post(TRANSMISSION_API_BASE_URL, transmission, config);
}

const TransmissionService = {
    getAllTransmissions,
    deleteTransmission,
    updateTransmission,
    insertTransmission
}

export default TransmissionService;