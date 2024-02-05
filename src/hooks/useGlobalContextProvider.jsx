import { useState } from "react";
import { useLocalStorage } from "react-use";

function useGlobalContextProvider() {
    const [shadowPassword, setShowPassword] = useState(false)
    const [shadowConfirmPassword, setShadowConfirmPassword] = useState(false)
    const [error, setError] = useState('')
    const [token, setToken, clearToken] = useLocalStorage('token');
    const [user, setUser, clearUser] = useLocalStorage('user');
    const [transactionsProducts, setTransactionsProducts] = useState([]);
    const [dados, setDados] = useState([]);



    return {
        shadowPassword,
        setShowPassword,
        shadowConfirmPassword,
        setShadowConfirmPassword,
        error,
        setError,
        token,
        setToken,
        clearToken,
        user,
        setUser,
        clearUser,
        transactionsProducts,
        setTransactionsProducts,
        dados,
        setDados
    }
}

export default useGlobalContextProvider;