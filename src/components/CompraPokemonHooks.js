import React from "react";
import { useDispatch } from "react-redux";
import {
  accionComprarPokemon,
  accionRetornarPokemon,
} from "../redux/actions/GameShopActions";

function CompraPokemonHooks() {
  const dispatch = useDispatch();

  return (
    <div className="d-grid gap-2">
      <button
        className="btn btn-dark btn-sm"
        onClick={() => {
          dispatch(accionComprarPokemon(1));
        }}
      >
        Comprar Pokemon
      </button>
      <button
        className="btn btn-dark btn-sm"
        onClick={() => {
          dispatch(accionRetornarPokemon(1));
        }}
      >
        Regresar Pokemon
      </button>
    </div>
  );
}

export default CompraPokemonHooks;
