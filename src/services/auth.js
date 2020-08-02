export const TOKEN_KEY = 'access-token'

export const Auth = () => localStorage.getItem(TOKEN_KEY) !== null
export const TokenGen = () => localStorage.getItem(TOKEN_KEY)

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
}
