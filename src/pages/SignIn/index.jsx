import './styles.css'
import { Link, useNavigate } from "react-router-dom"
import useGlobalContext from "../../hooks/useGlobalContext"
import CloseEye from "../../assets/close-eye.svg"
import OpenEye from "../../assets/open-eye.svg"
import { useState, useEffect } from 'react'
import Alert from '@mui/material/Alert';


function SignIn() {
  const { shadowPassword, setShowPassword, error, setError, setToken, user, token } = useGlobalContext();

  const navigate = useNavigate();
  const [formSignIn, setFormSignIn] = useState({
    email: '',
    senha: ''
  }
  )

  async function handleSubmit(e) {
    e.preventDefault()

    if (!formSignIn.email || !formSignIn.senha) {
      setError('Preencher todos os campos!')

      setTimeout(() => {
        setError('')
      }, 3000);
      return;
    }


    if (user) {
      const verificarUser = user.find(user => user.email === formSignIn.email && user.senha === formSignIn.senha)
      if (verificarUser) {
        const token = "123456"
        setToken(token)
        return
      }
    }

    setError('Email ou senha inválido')

    setTimeout(() => {
      setError('')
    }, 3000);
    return;

  }

  function handleOnChange(e) {
    setFormSignIn({ ...formSignIn, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, [token])

  return (
    <div className='main-sign-in'>
      <form
        onSubmit={handleSubmit}
        className='container-form'>
        <h1>Login</h1>

        <input
          type='text'
          placeholder='E-mail'
          name='email'
          value={formSignIn.email}
          onChange={(e) => handleOnChange(e)}
        />
        <div className='container-password-input'>
          <input
            type={shadowPassword ? "text" : 'password'}
            placeholder='Senha'
            name='senha'
            value={formSignIn.senha}
            onChange={(e) => handleOnChange(e)}
          />
          <img
            src={shadowPassword ? CloseEye : OpenEye}
            onClick={() => setShowPassword(!shadowPassword)}
          />
        </div>
        <p></p>

        {error &&
          <div className='btn-error-singIn'>
            <Alert variant="filled" severity="error">
              {error}
            </Alert>
          </div>
        }

        <button type='submit'>Entrar</button>

        <div className='container-cadastro'>
          <span>Primeira vez aqui?</span>
          <Link to="/signup">CRIE UMA CONTA</Link>
        </div>

      </form>
    </div>

  )
}

export default SignIn
