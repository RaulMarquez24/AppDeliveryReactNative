import axios, { AxiosHeaders } from "axios";
import { LocalStorage } from "../../local/LocalStorage";
import { User } from "../../../../Domain/entities/User";

// const url = 'http://192.168.189.1:3000';  // ETHERNET
const url = 'http://192.168.1.19:3000';  // WIFI 

const ApiDelivery = axios.create({
    baseURL: `${url}/api`, //change to your own server address here!
    headers: {
        'Content-Type': 'application/json'
    }
})

const ApiDeliveryWithImage = axios.create({
    baseURL: `${url}/api`, //change to your own server address here!
    headers: {
        'Content-Type': 'multipart/form-data',
        'accept': 'application/json',
    }
})

// INTERCEPTORS
ApiDelivery.interceptors.request.use( 
    async(config) => {
        const data = await LocalStorage().getItem('user');
        if (data) {
            const user: User = JSON.parse(data as any);
            config.headers!['Authorization'] = user?.session_token!                              // | OTRA VERSION DE AXIOS
            // (config.headers as AxiosHeaders).set("Authorization", `${user?.session_token!}`); // | OTRA VERSION DE AXIOS
            // config.headers.set("Authorization", `${user?.session_token!}`);                   // | OTRA VERSION DE AXIOS
        }
        return config;
    }
);

ApiDeliveryWithImage.interceptors.request.use( 
    async(config) => {
        const data = await LocalStorage().getItem('user');
        if (data) {
            const user: User = JSON.parse(data as any);
            config.headers!['Authorization'] = user?.session_token!                              // | OTRA VERSION DE AXIOS
            // (config.headers as AxiosHeaders).set("Authorization", `${user?.session_token!}`); // | OTRA VERSION DE AXIOS
            // config.headers.set("Authorization", `${user?.session_token!}`);                   // | OTRA VERSION DE AXIOS
        }
        return config;
    }
);

// const customFetch = ({url, multipart}) => {
//     const headers = {
//         baseURL: url, //change to your own server address here!
//     }
//     if(multipart){
//         headers['Content-Type'] = 'multipart/form-data'
//     }
//     return axios.create({
//         baseURL: url, //change to your own server address here!
//         headers
//     })
// }

export { ApiDelivery, ApiDeliveryWithImage }
export const apiUrl = url;