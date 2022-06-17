class ServiceDecorator {
    #service
    #instance

    static getInstance(service) {
        if (!this.instance) {
            this.instance = new ServiceDecorator(service)
        }
        return this.instance
    }
    constructor(service) {
        this.service = this.wrap(service)
        super()
    }

    #wrap(instance) {
        if (!instance) {
            throw new Error('instance must colud not be null.')
        }
        return instance
    }

    request(config) {
        return this.service?.request(config)
    }

}

export default ServiceDecorator
