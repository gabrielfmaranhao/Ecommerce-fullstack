import axios from "axios";

const token  = localStorage.getItem("@Ecommerce:token")
const api = axios.create({
    baseURL: "https://apidoprojeto.herokuapp.com",
    headers: {
        'Authorization': `Bearer ${token}`
    }
})

export default api