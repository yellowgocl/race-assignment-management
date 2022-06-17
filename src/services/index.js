import ServiceDecorator from "./ServiceDecorator";
import axios from '@/config/axios'
import config from './config'

const Service = ServiceDecorator.getInstance(axios)

export { config, Service, ServiceDecorator }
export default Service;
