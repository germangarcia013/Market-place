import "./styles.css"
import Trash from '../../assets/trash.svg'
import useGlobalContext from "../../hooks/useGlobalContext"
import { useState } from "react";

export default function Main({ setModalAddProduto }) {

    const { user, transactionsProducts, setTransactionsProducts } = useGlobalContext()

    function handleDeleteProduct(id) {

        const updatedProducts = transactionsProducts.filter((products) => {
            return products.id !== id
        })

        setTransactionsProducts(updatedProducts)
    }

    const handleFormartMoney = (value) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }


    return (
        <main className="main">
            <div className="container-main">
                <h1>{user[0].nomeLoja}</h1>

                <h2>Seus produtos</h2>

                <div className="container-cards">
                    {transactionsProducts.map((products) => (
                        <div
                            key={products.id}
                            className="container-produtos"
                        >
                            <img src={products.imagem} />
                            <div className="info-produtos">
                                <h3>{products.nomeProduto}</h3>
                                <p>{products.descricao}</p>
                                <div className="container-preco">
                                    <span>{products.estoque} UNIDADES</span>
                                    <p>{handleFormartMoney(products.preco)}</p>
                                </div>
                                <div className="trash">
                                    <img
                                        onClick={() => handleDeleteProduct(products.id)}
                                        src={Trash} />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className="container-button">
                <button onClick={() => setModalAddProduto(true)}>
                    ADICIONAR PRODUTO
                </button>
            </div>


        </main>

    )
}