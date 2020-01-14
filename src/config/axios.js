import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'http://localhost:3100'
})

export default clienteAxios