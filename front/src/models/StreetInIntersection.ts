import { Model, model, field, foreign } from 'mobx-orm'
import { api } from '@/services/http-adapter'
import { Street } from './Street'
import { Intersection } from './Intersection'


@api('street-in-intersection')
@model
export class StreetInIntersection extends Model {
    @field street_id        ?: number
    @field intersection_id  ?: number

    @foreign(Street) readonly street: Street 
    @foreign(Intersection) readonly intersection: Intersection 
}
