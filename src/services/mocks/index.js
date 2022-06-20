import { rest } from 'msw'
import { setupWorker } from 'msw'
import reduce from 'lodash/reduce'
import find from 'lodash/find'
import isBoolean from 'lodash/isBoolean'
import isFunction from 'lodash/isFunction'
import minimatch from "minimatch"
// import { handlers } from './handlers'

import config from '../config'

const mockModules = import.meta.globEager('./dummy/**/*.?(js|json)')

const handlers = reduce(config, (r, v, k) => {
    const method = v?.['method']
    const url = v?.['url']
    
    const result = rest?.[method](
        url,
        async (req, res, ctx) => {
            const mock = v?.['mock']
            const mockPath = isBoolean(mock) && !!mock ? url : mock
            const mockModule = isFunction(mockPath) 
                ? { default: mockPath }
                : find(mockModules, (v, k) => (minimatch(k, `${mockPath}.?(js{,on})`)))
            const mockData = isFunction(mockModule?.default) ? await mockModule?.default(req) : mockModule?.default
            return res(
                ctx.json(mockData ?? { statusCode: 404, data: null })
            )
        }
    )
    r.push(result)
    return r
}, [])

export const worker = setupWorker(...handlers)

export default worker
