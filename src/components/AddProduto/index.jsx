import "./styles.css"
import InputsAddProduto from "../Inputs/InputsAddProduto"
import useGlobalContext from "../../hooks/useGlobalContext"
import { useState } from "react"
import Alert from '@mui/material/Alert';

export default function AddProduto({ setModalAddProduto, modalAddProduto }) {

    const { error, setError, user, transactionsProducts, setTransactionsProducts } = useGlobalContext()
    const [formAddProducts, setFormAddProducts] = useState({
        nomeProduto: '',
        preco: '',
        estoque: '',
        descricao: ''
    })


    function handleAddProduct(formAddProducts) {
        const newTansaction = {
            id: Math.floor(Math.random() * 10000),
            nomeProduto: formAddProducts.nomeProduto,
            preco: formAddProducts.preco,
            estoque: formAddProducts.estoque,
            descricao: formAddProducts.descricao,
            imagem: formAddProducts.imagem,
        }

        setTransactionsProducts([...transactionsProducts, newTansaction])
    }


    function handleSubmit(e) {
        e.preventDefault()

        if (!formAddProducts.nomeProduto || !formAddProducts.estoque || !formAddProducts.descricao || !formAddProducts.preco || !formAddProducts.imagem) {
            setError('Preencher todos os campos!')

            setTimeout(() => {
                setError('')
            }, 3000);
            return;
        }

        handleAddProduct(formAddProducts)
        setModalAddProduto(false)
        setFormAddProducts('')
    }

    function handleChangeForm(event) {
        setFormAddProducts({ ...formAddProducts, [event.target.name]: event.target.value })
    }

    return (
        <>
            {modalAddProduto &&
                <form
                    onSubmit={handleSubmit}
                    className="main-form-add-produto "
                >
                    <h1>{user.nomeLoja}</h1>

                    <h2>Adicionar Produto</h2>

                    <div className="form-add-produto">
                        <InputsAddProduto
                            formAddProducts={formAddProducts}
                            handleChangeForm={handleChangeForm}
                        />
                    </div>

                    <div className="container-button-add" >
                        <button
                            onClick={() => setModalAddProduto(false)}
                            className="btn-cancelar">
                            CANCELAR
                        </button>

                        <button
                            type="submit"
                            className="btn-add-produto"
                        >
                            ADICIONAR PRODUTO
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

        </>

    )
}