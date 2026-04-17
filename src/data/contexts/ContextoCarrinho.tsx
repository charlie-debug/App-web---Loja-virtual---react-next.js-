'use client'
import { createContext, useState } from "react"
interface ConstextoCarrinhoProps{
    numero: number
    incrementar?: () =>void
    decrementar?: () =>void
}

const ConstextoCarrinho = createContext<ConstextoCarrinhoProps>({}as any)
export function ProvedorCarrinho(props: any) {
    const [numero, setNumero] = useState(1010)
    return (
        <ConstextoCarrinho.Provider
         value={{numero,
            incrementar:()=>setNumero(numero +1),
            decrementar:()=>setNumero(numero -1)

        }}>{props.children}</ConstextoCarrinho.Provider>
    )
}
export default ConstextoCarrinho