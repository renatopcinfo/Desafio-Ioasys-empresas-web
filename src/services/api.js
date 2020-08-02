import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://empresas.ioasys.com.br/api/v1/'
})

const apis = {
  login: (user) => instance.post(`users/auth/sign_in`, user)
}

export default apis
