'use client'
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function Carrinho(){
    return(
        <Link href="/carrinho">
      <div className="flex relative">
        <IconShoppingCart size={50} stroke={1}/>
        <div className="absolute -top-1.0 -right-1.5 w-6 h-6 bg-red-500 rounded-full flex justify-center items-center text-xs">99</div>
      </div>

        </Link>
    )
}