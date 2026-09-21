import axios from "axios";

// export const baseApiUrl = "http://localhost/react-project-api/api/";
export const basePath = "http://localhost/react-project-api/api/";
export const baseApiUrl = "http://localhost/react-project-api/api/";

//Host
// export const baseUrl = "http://example.com/";
//export const baseApiUrl = "http://example.com/";


export const api = axios. create({
    baseURL: baseApiUrl,
    headers: {
        "Content-Type" : "application/json",
    },
});