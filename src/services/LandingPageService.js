import axios from "axios";
import BASE_URL from "./BaseUrlService";

const LANDING_API_BASE_URL = BASE_URL;

// Function for getting all fiches
const getLandingPageStat = () => {
    return axios.get(LANDING_API_BASE_URL + "v_landing_pages");
}


const LandingPageService = {
    getLandingPageStat
}

export default LandingPageService;