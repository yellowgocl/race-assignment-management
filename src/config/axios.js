import axios from 'axios'
const config = {
    baseURL: '',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
    debug: import.meta.env.PROD
}
const instance = axios.create(config)
export default instance