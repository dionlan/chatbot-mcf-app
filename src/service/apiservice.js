import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL

const httpClient = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

class ApiService{
}

export default ApiService;