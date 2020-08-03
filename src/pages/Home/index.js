import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import logo from '../../assets/logo-nav.png'
import lupa from '../../assets/ic-search-copy.png'
import close from '../../assets/ic-close.png'
import * as S from './styles'

import { logout } from '../../services/auth'

export default function Home(props) {
  const handleLogin = () => {
    logout()
    history.push('/')
  }

  const history = useHistory()

  let busca = (
    <>
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </Link>
      <img src={lupa} alt="lupa" onClick={props} />
    </>
  )

  if (props) {
    busca = (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="">
            <img src={lupa} alt="lupa" />
          </span>
        </div>
        <input
          type="text"
          placeholder="Pesquisar"
          id="search"
          className="form-control"
        />
        <div className="input-group-append">
          <span className="">
            <img src={close} alt="fechar" onClick={handleLogin} />
          </span>
        </div>
      </div>
    )
  }

  return <S.Nav className="navbar navbar-light bg-light ">{busca}</S.Nav>
}
