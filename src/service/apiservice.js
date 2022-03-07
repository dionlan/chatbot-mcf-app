import axios from "axios";

const baseURL = 'http://localhost:8080'

const httpClient = axios.create({

    baseURL: baseURL,
    withCredentials: true
})

class ApiService{
    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }
    
    registrarToken(token){
        if(token){
            httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
    }

    post(url, objeto){
        const requestUrl = `${apiUrl}${url}`
        return httpClient.post(requestUrl, objeto);
    }
}
export default ApiService;