import useGlobalContextProvider from "../hooks/useGlobalContextProvider";
import { createContext } from "react";

const GlobalContext = createContext({});

export function GlobalContextProvider(props) {
    const globalProvider = useGlobalContextProvider();

    return (
        <GlobalContext.Provider value={globalProvider}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;