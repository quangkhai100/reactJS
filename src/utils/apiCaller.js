import axios from 'axios';

const baseURL= 'http://localhost:8000/api/'
export default function apiCaller(endpoint, method, body){
    return axios({
        method: method,
        url: baseURL + endpoint,
        data: body
    }).catch(err =>
        console.log(err)
    )
}