import axios from 'axios'

const axiosInstances = axios.create({
    baseURL: 'https://gorest.co.in/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json",
        'Authorization' : "Bearer 2fb5faa5da5a79e0d8d635d76fde229408fbbdb332202230b66e633db1c4a40e"
    }
});

export default axiosInstances;