import axios from "axios";
import BASE_URL from "./BaseUrlService";

const DASHBOARD_API_BASE_URL = BASE_URL;

// Function for getting all fiches
const getCurrentMonthStats = () => {
    return axios.get(DASHBOARD_API_BASE_URL + "v_stat_current_months");
}

const getLastSaledAnnonces = () => {
    return axios.get(DASHBOARD_API_BASE_URL + "v_latest_annonce_vendus");
}

const getBestUserList = () => {
    return axios.get(DASHBOARD_API_BASE_URL + "v_best_users");
}

const getDashboardStats = () => {
    return axios.get(DASHBOARD_API_BASE_URL + "statistiques/dashboard");
}

const getYearMouvements = (year) => {
    return axios.get(DASHBOARD_API_BASE_URL + "statistiques/" + year);
}

const DashboardService = {
    getCurrentMonthStats,
    getLastSaledAnnonces,
    getBestUserList,
    getDashboardStats,
    getYearMouvements
}

export default DashboardService;