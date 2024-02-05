import "./styles.css"
import InputsPerfil from "../Inputs/InputsPerfil"
import useGlobalContext from "../../hooks/useGlobalContext"
import { useEffect, useState } from "react"
import Alert from '@mui/material/Alert';

export default function PerfilModal({ setModalEditPerfil }) {

    const { user, dados } = useGlobalContext()


    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="main-form-edit-perfil">
            <form
                className="form"
                onSubmit={handleSubmit}
            >
                <h1>{user.nomeLoja || user[0].nomeLoja}</h1>

                <h2>Perfil</h2>

                <div className="form-edit-produto">
                    <InputsPerfil
                        infoUser={user}
                    />
                </div>

                <div className="container-button-edit" >

                    <button
                        type="submit"
                        className="btn-edit-produto"
                        onClick={() => setModalEditPerfil(true)}
                    >
                        EDITAR PERFIL
                    </button>

                </div>
            </form>


        </div >
    )
}