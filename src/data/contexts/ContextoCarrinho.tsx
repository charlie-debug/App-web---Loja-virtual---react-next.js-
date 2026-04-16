import { createContext } from "react"

const ConstextoCarrinho = createContext<any>(null)
export function ProvedorCarrinho(props: any) {
    return (
        <ConstextoCarrinho.Provider value={{}}>{props.children}</ConstextoCarrinho.Provider>
    )
}