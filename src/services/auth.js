const TOKEN_KEY = 'access-token'

const isLogged = () => !!localStorage.getItem(TOKEN_KEY)
const signin = (token) => localStorage.setItem(TOKEN_KEY, token)
const logout = () => localStorage.removeItem(TOKEN_KEY)

export { isLogged, signin, logout }
