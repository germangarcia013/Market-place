import EditPerfilModal from '../../components/EditPerfilModal'
import PerfilModal from '../../components/PerfilModal'
import Siderbar from '../../components/Siderbar'
import './styles.css'
import { useState } from 'react'

export default function Perfil() {
    const [modalEditPerfil, setModalEditPerfil] = useState(false)


    return (
        <div className="main-home">
            <Siderbar />
            <PerfilModal
                setModalEditPerfil={setModalEditPerfil}
            />
            <EditPerfilModal
                modalEditPerfil={modalEditPerfil}
                setModalEditPerfil={setModalEditPerfil}
            />

        </div>
    )
}