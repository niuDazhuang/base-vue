
import { isEnvDev, isEnvSit } from '@utils/business'

let host = 'https://www.test.com'

if (isEnvDev) {
  host = ''
} else if (isEnvSit) {
  host = 'https://www.prod.com'
}

export default host
