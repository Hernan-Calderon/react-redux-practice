import React, { useState } from "react";
import { useDispatch } from "react-redux";

import fetchPokemon from "../../redux/actions/buscadorActions";

function BuscadorPokemon() {
  const dispatch = useDispatch();
  const [nombrePokemon, setNombrePokemon] = useState("mewtwo");

  return (
    <div className="form-group">
      <label htmlFor="buscarPokemon" className="text-white">
        Buscar Pokemon
      </label>
      <input
        type="text"
        className="form-control"
        id="buscarPokemon"
        value={nombrePokemon}
        onChange={(evento) => {
          setNombrePokemon(evento.target.value);
        }}
      />
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          dispatch(fetchPokemon(nombrePokemon));
        }}
      >
        Enviar
      </button>
    </div>
  );
}

export default BuscadorPokemon;
