import axios, { AxiosInstance } from "axios";


const BASE_URL = process.env.NEXT_PUBLIC_API_URL
const tenantId = process.env.NEXT_PUBLIC_TENANTID

console.log('✅ BASE_URL:', BASE_URL);
console.log('✅ TENANT_ID:', tenantId);

const instance: AxiosInstance = axios.create({
    baseURL: `${BASE_URL}/${tenantId}`,
}
)

export default instance