import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import * as S from './styles'

import Logo from '../../assets/logo-home.png'
import api from '../../services/api'
import { signin } from '../../services/auth'

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
    try {
      const result = await api.login(formValues)
      signin('access-token')
      console.log(result.data)
      history.push('/home')
    } catch (e) {
      console.log('Usuário e/ou senha inválido(s)')
    }
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
