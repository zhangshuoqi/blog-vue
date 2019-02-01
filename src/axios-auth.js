import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'https://wd4780122795tsbgnr.wilddogio.com'
})

// axiosInstance.defaults.headers.common['xxx'] = 'Token'
export default axiosInstance