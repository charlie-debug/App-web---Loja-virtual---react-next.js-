import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function Carrinho(){
    return(
        <Link href="/carrinho">
      <div className="flex relative">
        <IconShoppingCart size={46} stroke={1}/>
        <div className="absolute w-6 h-6 -top-0.5 -right-0.5 bg-red-600 rounded-full 
        flex justify-center text-xs">99</div>
      </div>

        </Link>
    )
}