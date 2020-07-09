import axios from 'axios'
import host from './host'
import { getCookie } from '../utils'

const context = '/keyAccount'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.token = getCookie('token')
axios.defaults.headers.serviceid = getCookie('serviceid')
axios.defaults.headers.Xversion = getCookie('Xversion')
axios.defaults.timeout = 5000

export const httpGet = (api, params = {}) => axios({
  url: host + context + api,
  method: 'get',
  ...params
})

export function httpPost<T>(api, params): Promise<T> {
  return new Promise((resolve, reject) => {
    axios
      .post(host + context + api, params)
      .then(res => {
        if (!!res && Number(res.status) === 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
