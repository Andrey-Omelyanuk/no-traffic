import { Model, RawObject, Adapter, ASC, Selector, XFilter } from 'mobx-orm'

import http from './http'

export class HttpAdapter<M extends Model> extends Adapter<M> {
    readonly endpoint: string

    constructor (model: any, endpoint?: string) {
        super(model)
        this.endpoint = endpoint + '/'
    }

    async __action (obj_id: number, name: string, kwargs: any): Promise<any> {
        const data = new FormData()
        for (const key in kwargs) {
            if (Object.prototype.hasOwnProperty.call(kwargs, key)) {
                const value = kwargs[key]
                if (value !== null && typeof value === 'object' && !(value instanceof File)) {
                    data.append(key, JSON.stringify(value))
                } else {
                    data.append(key, value)
                }
            }
        }
        const response = await http.post(`${this.endpoint}${obj_id}/${name}/`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return response.data
    }

    async __create (obj: RawObject): Promise<RawObject> {
        const data = new FormData()
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const value = obj[key]
                if (value !== null && typeof value === 'object' && !(value instanceof File)) {
                    data.append(key, JSON.stringify(value))
                } else {
                    data.append(key, value)
                }
            }
        }

        const response = await http.post(this.endpoint, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return response.data
    }

    async __update (obj_id: number, only_changed_raw_data: RawObject): Promise<RawObject> {
        const data = new FormData()
        for (const key in only_changed_raw_data) {
            if (Object.prototype.hasOwnProperty.call(only_changed_raw_data, key)) {
                const value = only_changed_raw_data[key]
                if (value !== null && typeof value === 'object' && !(value instanceof File)) {
                    data.append(key, JSON.stringify(value))
                } else {
                    data.append(key, value)
                }
            }
        }
        if (![...data].length) {
            return {}
        }
        const response = await http.patch(`${this.endpoint}${obj_id}/`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return response.data
    }

    async __delete (obj_id: number): Promise<void> {
        await http.delete(`${this.endpoint}${obj_id}/`)
    }

    async __get (obj_id: number): Promise<RawObject> {
        const raw_obj = await http.get(`${this.endpoint}${obj_id}/`)
        return raw_obj.data
    }

    async __find (): Promise<RawObject> {
        const raw_obj = await http.get(this.endpoint) 
        return raw_obj
    }

    async __load (selector, controller?): Promise<RawObject[]> {
        let queryParams = selector.URLSearchParams
        const response: any = await http.get(
            this.endpoint + `?${queryParams.toString()}`,
            { signal: controller?.signal },
        )
        return response.data
    }

    async getTotalCount (where?, controller?): Promise<number> {
        const response = await http.get(
            this.endpoint + 'count/' + (where ? `?${where.URLSearchParams.toString()}` : ''),
            { signal: controller?.signal },
        )
        return response.data
    }

    async getDistinct (where: XFilter, field: string, controller?): Promise<any[]> {
        const searchParams = where ? where.URLSearchParams : new URLSearchParams()
        searchParams.set('__distinct', field)
        const response = await http.get(
            `${this.endpoint}distinct/?${searchParams.toString()}`,
            { signal: controller?.signal },
        )
        return response.data
    }
}

// model decorator
export function api (endpoint: string) {
    return (cls: any) => {
        const adapter = new HttpAdapter(cls, endpoint)
        cls.__proto__.__adapter = adapter
    }
}
