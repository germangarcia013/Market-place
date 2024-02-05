import "./styles.css"
import useGlobalContext from "../../hooks/useGlobalContext"
import { useEffect, useState } from "react"
import Alert from '@mui/material/Alert';
import InputsEditPerfil from "../Inputs/InputsEditPerfil";
import { useNavigate } from "react-router-dom";

export default function EditPerfilModal({ modalEditPerfil, setModalEditPerfil }) {

    const navigate = useNavigate()
    const { error, setError, user, setUser } = useGlobalContext()
    const [formEditPerfil, setFormEditPerfil] = useState({
        nome: '',
        nomeLoja: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        if (!formEditPerfil.nome || !formEditPerfil.nomeLoja || !formEditPerfil.email || !formEditPerfil.senha) {
            setError('Preencher todos os campos!')

            setTimeout(() => {
                setError('')
            }, 3000);
            return;
        }

        if (formEditPerfil.senha !== formEditPerfil.confirmarSenha) {
            setError('As senhas não são iguais!')

            setTimeout(() => {
                setError('')
            }, 4000);
            return;
        }


        const updatedUser = {
            user,
            nome: formEditPerfil.nome,
            nomeLoja: formEditPerfil.nomeLoja,
            email: formEditPerfil.email,
            senha: formEditPerfil.senha || user[0].senha
        }

        setUser([updatedUser])
        navigate('/home')
    }


    function handleChangeForm(event) {
        setFormEditPerfil({ ...formEditPerfil, [event.target.name]: event.target.value })
    }


    useEffect(() => {
        if (user) {
            const { senha, confirmarSenha, ...info } = user[0];
            setFormEditPerfil(info)
        }
    }, [])


    return (
        <div>
            {modalEditPerfil &&
                <form
                    className="main-form-edit-perfil-2"
                    onSubmit={handleSubmit}
                >
                    <h1>{user.nomeLoja || user[0].nomeLoja}</h1>

                    <h2>Editar Perfil</h2>

                    <div className="form-edit-produto">
                        <InputsEditPerfil
                            formEditPerfil={formEditPerfil}
                            handleChangeForm={handleChangeForm}
                        />
                    </div>

                    <div className="container-button-edit" >
                        <button
                            type="button"
                            onClick={() => setModalEditPerfil(false)}
                            className="btn-cancelar">
                            CANCELAR
                        </button>


                        <button
                            type="submit"
                            className="btn-edit-produto"
                        >
                            EDITAR PERFIL
                        </button>

                        <div className="alerta-erro-produtos">
                            {error &&
                                <Alert
                                    sx={{ width: '100%' }}
                                    variant="filled" severity="error"
                                >
                                    {error}
                                </Alert>}
                        </div>
                    </div>
                </form>
            }

        </div>
    )
}