import axios from "axios";

const USAGE_API_BASE_URL = "http://localhost:8080/api/usages";

// function for login
const getAllUsages = () => {
    return axios.get(USAGE_API_BASE_URL);
}

const deleteUsage = (idUsage) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.delete(USAGE_API_BASE_URL + "/" + idUsage, config);
}

const updateUsage = (idUsage, usage) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.put(USAGE_API_BASE_URL + "/" + idUsage, usage, config);
}

const insertUsage = (usage) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.post(USAGE_API_BASE_URL, usage, config);
}

const UsageService = {
    getAllUsages,
    deleteUsage,
    updateUsage,
    insertUsage
}

export default UsageService;