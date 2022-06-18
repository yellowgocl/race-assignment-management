const config = {
    user: {
        get: {
            url: '/api/user',
            method: 'get'
        },
        update: {
            url: '/api/user',
            method: 'post'
        },
        delete: {
            url: 'api/user',
            method: 'delete'
        },
        add: {
            url: 'api/user',
            method: 'put'
        }
    }
}

export default config
