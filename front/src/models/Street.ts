import { Model, model, field, foreign } from 'mobx-orm'
import { api } from '@/services/http-adapter'
import { City } from './City'


@api('street')
@model
export class Street extends Model {
    @field name     ?: string     
    @field city_id  ?: number

    @foreign(City) readonly city: City 
}
