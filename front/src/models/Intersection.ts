import { Model, model, field } from 'mobx-orm'
import { api } from '@/services/http-adapter'


@api('intersection')
@model
export class Intersection extends Model {
    @field name ?: string     

    // readonly streets_: Street[]
}