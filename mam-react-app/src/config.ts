//local

import axios from "axios";

export const basePath = "http://localhost/react-project-api/";
export const baseApiUrl = "http://localhost/react-project-api/api/";

//hosting
// export const basePath = "http://masumarafat.com/";
// export const baseApiUrl = "http://masumarafat.com/api";

export const api = axios.create({
    baseURL: baseApiUrl,
    headers: {
        "Content-Type": "application/json",
        
    },
});