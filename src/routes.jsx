import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import SignIn from "./pages/SignIn"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import { GlobalContextProvider } from "./contexts/GlobalContextProvider"
import useGlobalContext from "./hooks/useGlobalContext"
import Perfil from "./pages/Perfil"


function ProtectedRoutes({ redirectTo }) {
    const { token } = useGlobalContext()

    return token ? <Outlet /> : <Navigate to={redirectTo} />
}


export default function MainRoutes() {
    return (
        <GlobalContextProvider>
            <Routes>
                <Route>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/login" element={<SignIn />} />
                </Route>

                <Route path="/signup" element={<Signup />} />

                <Route element={<ProtectedRoutes redirectTo="/login" />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/perfil" element={<Perfil />} />
                </Route>
            </Routes>
        </GlobalContextProvider>
    )
}