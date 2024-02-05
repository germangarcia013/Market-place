import "./styles.css"
import Store from "../../assets/store.svg"
import User from "../../assets/user.svg"
import Close from "../../assets/exit.svg"
import storeActive from "../../assets/store-selected.svg"
import userActive from "../../assets/user-selected.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import useGlobalContext from "../../hooks/useGlobalContext";
import { useEffect, useState } from "react";


export default function Siderbar() {
    const navigate = useNavigate()
    const location = useLocation();

    const [activeItem, setActiveItem] = useState("");

    const { clearToken, clearUser, setDados } = useGlobalContext()


    function handleLogout() {
        clearToken();
        setDados([])
        navigate("/login")
    }

    useEffect(() => {
        const pathname = location.pathname;

        if (pathname === "/home") {
            setActiveItem("home");
        } else if (pathname === "/perfil") {
            setActiveItem("perfil")
        } else {
            setActiveItem("");
        }
    }, [location]);

    return (
        <nav className="container-nav">
            <div className="container-img">
                <Link to={'/home'}>
                    <div>
                        <img src={activeItem === "home" ? storeActive : Store} alt="Ícone de loja" />

                    </div>
                </Link>

                <Link to={'/perfil'}>
                    <div >
                        <img src={activeItem === 'perfil' ? userActive : User} alt="Ícone de usuário" />
                    </div>
                </Link>
                <div>
                    <img
                        onClick={handleLogout}
                        className='img-close' alt="Icone sair"
                        src={Close}
                    />
                    <p>Sair</p>
                </div>
            </div>
        </nav>
    )
}