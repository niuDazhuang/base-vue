import { httpPost } from './ajax'
import api from './api'

const http = {
  /** 概览页 */
  query: (keys: object) => httpPost<res.IQuery>(api.query, keys)
}

export default http
