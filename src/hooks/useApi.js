import { useState } from 'react';

const useApi = (requestConfig, service) => {
    const [error, setError] = useState()
    const [isFetching, setIsFetching] = useState(false)

    const hasError = useMemo(() => {
        return !!error
    }, [error])
    
    const fetch = async (params, config) => {
        if (!service) {
            console.error(`service is null, will ignore the fetch action for this time.==> config:${config}, params:${params}`)
        }
        if (isFetching) return
        let result
        try{
            const parsedConfig = { ...requestConfig, ...config }
            setError(null)
            setIsFetching(true)
            result = await service?.request(parsedConfig)
            setIsFetching(false)
        } catch (error) {
            setError(error)
            setIsFetching(false)
        }

        return result
    }

    

}