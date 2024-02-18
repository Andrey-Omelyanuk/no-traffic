import { Model, model, field } from 'mobx-orm'
import { api } from '../services/http-adapter'


@api('intersection')
@model
export class Intersection extends Model {
    @field name?: string     
    @field private location?: string     

    get longitude() {
        return locationStringToObject(this.location).longitude
    }
    set longitude(value: number) {
        // TODO:
    }

    get latitude() {
        return locationStringToObject(this.location).latitude
    }
    set latitude(value: number) {
        // TODO: 
    }
}
 
function locationStringToObject(str: String) {
    var LatLng = str.split(' ') 
    return {
        latitude: parseFloat(LatLng[1].substring(1)),
        longitude: parseFloat(LatLng[2].substring(0, LatLng[2].length - 1))
    } 
}
