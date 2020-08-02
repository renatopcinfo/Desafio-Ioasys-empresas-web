const TOKEN_KEY = 'access-token'

const isLogged = () => !!localStorage.getItem(TOKEN_KEY)

export { TOKEN_KEY, isLogged }
