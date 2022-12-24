import React from "react";
import { useSelector } from "react-redux";

function CantidadPokemonHooks() {
  const gameShop = useSelector((state) => state.GameShop);

  return <div>Unidades: {gameShop.pokemon}</div>;
}

export default CantidadPokemonHooks;
