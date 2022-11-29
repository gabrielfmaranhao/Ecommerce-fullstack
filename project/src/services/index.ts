import axios from "axios";

const token  = localStorage.getItem("@Ecommerce:token")
const api = axios.create({
    baseURL: "https://api-project-1vuo.onrender.com",
    headers: {
        'Authorization': `Bearer ${token}`
    }
})

export default api