import React from 'react'
import useApi from '@/hooks/useApi'
import { config as apiConfig } from '@/services'
import { withApi, ApiProvider } from '@/context/ApiContext'
console.info(apiConfig['user/get'])
export default (props) => {

    return (
        <>
            Landing Page
            <ApiProvider
                request={apiConfig['user/get']}>
                {
                    ({fetch, isFetching, hasError, error}) => {
                        return(
                            <>
                            { hasError && (<span style={{color:'red'}}>hasError: {JSON.stringify(hasError)}</span> )}
                            <button onClick={() => fetch({id: 12})}>get user</button>
                            </>
                        )
                    }
                }
            </ApiProvider>
            <ApiProvider
                request={apiConfig['user/update']}>
                {
                    ({fetch, isFetching, hasError, error}) => {
                        console.info(hasError)
                        return(
                            <>
                            { hasError && (<span style={{color:'red'}}>hasError: {JSON.stringify(hasError)}</span> )}
                            <button onClick={() => fetch({})}>update user</button>
                            </>
                        )
                    }
                }
            </ApiProvider>
        </>
    )
}