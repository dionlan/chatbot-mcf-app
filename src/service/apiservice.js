import axios from "axios";

const baseURL = 'http://localhost:8080'

const httpClient = axios.create({
    baseURL: baseURL
})

class ApiService{
    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }

    post(url, objeto){
        const requestUrl = `${this.apiUrl}${url}`
        return httpClient.post(requestUrl, objeto);
    }
}
export default ApiService;