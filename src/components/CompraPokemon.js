import React from "react";
import { connect } from "react-redux";

import {
  accionComprarPokemon,
  accionRetornarPokemon,
} from "../redux/actions/GameShopActions";

function CompraPokemon(props) {
  return (
    <div className="d-grid gap-2">
      <button
        className="btn btn-dark btn-sm"
        onClick={() => {
          props.accionComprarPokemon(1);
        }}
      >
        Comprar Pokemon
      </button>
      <button
        className="btn btn-dark btn-sm"
        onClick={() => {
          props.accionRetornarPokemon(1);
        }}
      >
        Regresar Pokemon
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  accionComprarPokemon,
  accionRetornarPokemon,
};

export default connect(null, mapDispatchToProps)(CompraPokemon);
