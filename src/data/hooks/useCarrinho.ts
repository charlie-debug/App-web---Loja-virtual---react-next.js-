import { useContext } from "react";
import ConstextoCarrinho from "../contexts/ContextoCarrinho";

const useCarrinho = ()=> useContext(ConstextoCarrinho)
export default useCarrinho