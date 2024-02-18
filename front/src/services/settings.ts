import { makeObservable, observable, runInAction } from 'mobx'
import http from './http'

class Settings {
    // NOTE: there are no observable fields
    // because they initialized once and never changed except is_ready
    @observable is_ready    :boolean    = false 
                error       :string     = undefined 

    // frontend settings
    readonly DEBUG :boolean    = process.env.DEBUG === 'true' ? true : false
    readonly API   :string     = process.env.API || 'http://localhost/api'

    // backend settings
    API_DEBUG :boolean

    constructor () {
        http.defaults.baseURL = this.API 
        makeObservable(this)
        this.DEBUG = true 
        this.init()
    }

    private async init () {
        try {
            const response = await http.get('/settings/')
            this.API_DEBUG = response.data.DEBUG
        }
        catch (e) {
            this.error = e.message
            console.error(e)
        }
        finally {
            runInAction(() => this.is_ready = true)
        }
    }
}

const settings = new Settings()
export default settings
