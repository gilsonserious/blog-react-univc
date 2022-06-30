import axios from "axios";

const api = axios.create({
    baseURL: 'http://172.31.96.1:1337/'
})

export default api;