import axios from 'axios'

axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.withCredentials = true
// redirect to login page if 401 response received
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            window.location.href = '/auth/login/'
        }
        return Promise.reject(error)
    }
)

const http = axios

export default http
