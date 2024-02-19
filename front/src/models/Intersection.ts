import { Model, model, field } from 'mobx-orm'
import { api } from '../services/http-adapter'
import { StreetInIntersection } from './StreetInIntersection'


@api('intersection')
@model
export class Intersection extends Model {
    @field name?: string     
    @field private location?: string     

    readonly streetsInIntersection: StreetInIntersection[]

    get city() {
        if (this.streetsInIntersection.length)
            // city of first street is the city of intersection
            return this.streetsInIntersection[0]?.street?.city.name
        return ''
    }

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
    let empty = {
        latitude: 0,
        longitude: 0
    }
    if (!str) return empty
    let LatLng = str.split(' ') 
    return !LatLng ? empty : {
        latitude: parseFloat(LatLng[1].substring(1)),
        longitude: parseFloat(LatLng[2].substring(0, LatLng[2].length - 1))
    } 
}
