'use client'
import { ProvedorCarrinho } from "@/data/contexts/ContextoCarrinho";

export default function Layout(props: any){
    return(
       <ProvedorCarrinho>
         <div>{props.children}</div>
       </ProvedorCarrinho>
    )
}