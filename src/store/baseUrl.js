import axios from "axios"

const baseUrl = axios.create({baseURL: "https://albir.sa/api"})

export default baseUrl