'use client'
import CartaoProduto from "@/components/produto/CartaoProduto";
import Pagina from "@/components/template/Pagina";
import produtos from "@/data/constants/produtos";
import ConstextoCarrinho from "@/data/contexts/ContextoCarrinho";
import useCarrinho from "@/data/hooks/useCarrinho";
import { useContext } from "react";

export default function Home() {

  return (
    <Pagina>
      <div>
        {produtos.map((produto) => (
          <CartaoProduto key={produto.id} produto={produto} />
        )

        )}
      </div>
    </Pagina>

  )
}
