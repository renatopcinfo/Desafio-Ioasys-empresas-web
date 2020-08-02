import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import * as S from './styles'

import Logo from '../../assets/logo-home.png'
import api from '../../services/api'
import { TOKEN_KEY } from '../../services/auth'

function Login() {
  const [formValues, setFormValues] = useState({})

  const history = useHistory()

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setFormValues({ ...formValues, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const result = await api.login(formValues)
    localStorage.setItem(TOKEN_KEY, 'access-token')
    console.log(result)
    history.push('/home')
  }

  return (
    <S.Container>
      <S.BoxForm>
        <form onSubmit={handleSubmit}>
          <S.ContainerBrain>
            <img src={Logo} alt="logo" />
          </S.ContainerBrain>
          <S.Title>Login to your Account</S.Title>
          <S.Input
            name="email"
            onChange={handleChange}
            placeholder="Seu Email"
            type="text"
          />
          <S.Input
            name="password"
            onChange={handleChange}
            placeholder="Sua Senha"
            type="password"
          />
          <S.Submit type="submit" value="LOGIN" />
        </form>
      </S.BoxForm>
    </S.Container>
  )
}

export default Login
