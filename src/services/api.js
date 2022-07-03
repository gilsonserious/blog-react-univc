import axios from "axios";

const api = axios.create({
    baseURL: 'http://univc-api.herokuapp.com/'
})

export default api;