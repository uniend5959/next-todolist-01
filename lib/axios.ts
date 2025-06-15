import axios, { AxiosInstance } from "axios";


const BASE_URL = process.env.NEXT_PUBLIC_API_URL
const tenantId = process.env.NEXT_PUBLIC_TENANTID

const instance: AxiosInstance = axios.create({
    baseURL: `${BASE_URL}/${tenantId}`,
}
)

export default instance