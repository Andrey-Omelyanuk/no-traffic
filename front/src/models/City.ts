import { Model, model, field } from 'mobx-orm'
import { api } from '@/services/http-adapter'
import { Street } from './Street'


@api('city')
@model
export class City extends Model {
    @field name ?: string     

    readonly streets: Street[]
}
