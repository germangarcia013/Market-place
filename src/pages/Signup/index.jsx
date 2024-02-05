import './styles.css'
import { Link, useNavigate } from "react-router-dom"
import OpenEye from "../../assets/open-eye.svg"
import CloseEye from "../../assets/close-eye.svg"
import useGlobalContext from '../../hooks/useGlobalContext'
import { useState } from 'react'
import Alert from '@mui/material/Alert';


function Singup() {
    const {
        shadowPassword,
        setShowPassword,
        shadowConfirmPassword,
        setShadowConfirmPassword,
        error,
        setError,
        setUser,
        setDados
    } = useGlobalContext();

    const navigate = useNavigate()
    const [formSignUp, setFormSignUp] = useState({
        nome: '',
        nomeLoja: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    })
    const [allData, setAllData] = useState([])


    async function handleSubmit(e) {
        e.preventDefault()


        if (!formSignUp.nome || !formSignUp.nomeLoja || !formSignUp.email || !formSignUp.senha || !formSignUp.confirmarSenha) {
            setError('Preencher todos os campos')
            setTimeout(() => {
                setError('')
            }, 2000);
            return;
        }

        if (formSignUp.senha.length < 8 || formSignUp.confirmarSenha.length < 8) {
            setError('A senha e/ou confirmação de senha precisa ter no mínimo 8 caracteres')
            setTimeout(() => {
                setError('')
            }, 2500);
            return;
        }

        if (formSignUp.senha !== formSignUp.confirmarSenha) {
            setError('As senhas digitadas não são iguais')
            setTimeout(() => {
                setError('')
            }, 2000);
            return;
        }

        const newData = [...allData, formSignUp]
        setUser(newData)
        setDados(...newData)
        navigate('/login')

    }

    function handleOnChange(event) {

        setFormSignUp({ ...formSignUp, [event.target.name]: event.target.value })
    }



    return (
        <div className='main-sign-up'>
            <form
                onSubmit={handleSubmit}
                className='container-form-up'>
                <h1>Crie uma conta</h1>

                <input
                    type='text'
                    placeholder='Seu nome'
                    name='nome'
                    value={formSignUp.nome}
                    onChange={(event) => handleOnChange(event)}

                />
                <input
                    type='text'
                    placeholder='Nome da loja'
                    name='nomeLoja'
                    value={formSignUp.nomeLoja}
                    onChange={(event) => handleOnChange(event)}
                />
                <input
                    type='text'
                    placeholder='E-mail'
                    name='email'
                    value={formSignUp.email}
                    onChange={(event) => handleOnChange(event)}
                />
                <div className='container-password-input'>
                    <input
                        type={shadowPassword ? "text" : "password"}
                        placeholder='Senha'
                        name='senha'
                        value={formSignUp.senha}
                        onChange={(event) => handleOnChange(event)}
                    />
                    <img
                        src={shadowPassword ? CloseEye : OpenEye}
                        onClick={() => setShowPassword(!shadowPassword)}
                    />
                </div>
                <div className='container-password-input'>
                    <input
                        type={shadowConfirmPassword ? "text" : "password"}
                        placeholder='Repita a senha'
                        name='confirmarSenha'
                        value={formSignUp.confirmarSenha}
                        onChange={(event) => handleOnChange(event)}
                    />

                    <img
                        src={shadowConfirmPassword ? CloseEye : OpenEye}
                        onClick={() => setShadowConfirmPassword(!shadowConfirmPassword)}
                    />
                </div>
                <p></p>

                {error &&
                    <div className='btn-error-sign-up'>
                        <Alert variant="filled" severity="error">
                            {error}
                        </Alert>
                    </div>
                }

                <button>Criar conta</button>

                <div className='container-cadastro'>
                    <span>Já possui uma conta?</span>
                    <Link to="/login">ACESSE</Link>
                </div>

            </form>
        </div>

    )
}

export default Singup
