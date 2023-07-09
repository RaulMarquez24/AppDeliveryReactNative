import axios from "axios";

        //pc
// const ApiDelivery = axios.create({
//     baseURL: 'http://192.168.234.1:3000/api', //change to your own server address here!
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })

// const ApiDeliveryWithImage = axios.create({
//     baseURL: 'http://192.168.234.1:3000/api', //change to your own server address here!
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         'accept': 'application/json',
//     }
// })
const url = 'http://192.168.111.125:3000'      //portatil
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