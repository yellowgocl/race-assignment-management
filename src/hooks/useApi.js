import { useState, useMemo, useCallback } from 'react';
import Service from '@/services'

import lowerCase from 'lodash/lowerCase'

const useApi = (requestConfig, service = Service) => {
    const [error, setError] = useState()
    const [isFetching, setIsFetching] = useState(false)

    const hasError = useMemo(() => {
        return !!error
    }, [error])
    const fetch = useCallback(async (data, config, key) => {
        
        if (isFetching) return
        let result
        if (key && !requestConfig?.[key]) {
            throw new Error(`can not found the config by key of ${key}`)
        }
        const fetchConfig = key ? (requestConfig?.[key]) : requestConfig
        if (!fetchConfig?.method) {
            console.warn(`method field in the request config is empty, the request will still be sent using the get method. but is this the behavior you expect? current config: ${fetchConfig}`)
        }
        const method = lowerCase(fetchConfig?.method ?? 'get')
        let parsedDataParams = { data }
        switch (method) {
            case 'get':
                parsedDataParams = { params: data }
                break;
        }
        try{
            const parsedConfig = { ...fetchConfig, ...config, method, ...parsedDataParams }
            setError(null)
            setIsFetching(true)
            result = await service?.request(parsedConfig)
            setIsFetching(false)
        } catch (error) {
            setError(error)
            setIsFetching(false)
        }

        return result
    }, [requestConfig])

    return [{ isFetching, hasError, error }, fetch]

}

export default useApi
