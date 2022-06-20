import { createContext, useMemo, useCallback } from "react";
import useApi from '@/hooks/useApi'

import isFunction from 'lodash/isFunction'

export const ApiContext = createContext()

export const ApiProvider = ({children, request, ...props}) => {
    const [{ isFetching, hasError, error }, fetch] = useApi(request)
    const rootProps = useMemo(() => {
        return {
            isFetching, hasError, error, fetch
        }
    }, [isFetching, hasError, error, fetch])
    return (
        <ApiContext.Provider
            value={rootProps}>
            {isFunction(children) ? children?.(rootProps) : children}
        </ApiContext.Provider>
    )
}

export const withApi = (request) => {
    return (props) => {
        <ApiProvider {...props} request={request}></ApiProvider>
    }
}

export default ApiProvider
