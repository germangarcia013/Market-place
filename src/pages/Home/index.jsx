import "./styles.css"
import Siderbar from "../../components/Siderbar"
import { useState } from "react"
import AddProduto from "../../components/AddProduto"
import Main from "../../components/Main"
import useGlobalContext from "../../hooks/useGlobalContext"

export default function Home() {

    const [modalAddProduto, setModalAddProduto] = useState(false)

    return (
        <div className="main-home">
            <Siderbar
                setModalAddProduto={setModalAddProduto}
            />
            <Main
                setModalAddProduto={setModalAddProduto}
            />

            <AddProduto
                setModalAddProduto={setModalAddProduto}
                modalAddProduto={modalAddProduto}
            />
        </div>
    )
}