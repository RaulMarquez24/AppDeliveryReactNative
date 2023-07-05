import axios from "axios";

const ApiDelivery = axios.create({
    baseURL: 'http://192.168.234.1:3000/api', //change to your own server address here!
    headers: {
        'Content-Type': 'application/json'
    }
})

const ApiDeliveryWithImage = axios.create({
    baseURL: 'http://192.168.234.1:3000/api', //change to your own server address here!
    headers: {
        'Content-Type': 'multipart/form-data',
        'accept': 'application/json',
    }
})

export { ApiDelivery, ApiDeliveryWithImage }