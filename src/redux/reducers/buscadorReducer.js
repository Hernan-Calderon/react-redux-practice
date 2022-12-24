import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
} from "../actions/buscadorActions";

const estadoInicialBuscador = {
  cargando: false,
  pokemon: [],
  error: "",
};

const buscador = (state = estadoInicialBuscador, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        cargando: true,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        cargando: false,
        pokemon: action.payload,
        error: "",
      };
    case FETCH_POKEMON_FAILURE:
      return {
        cargando: false,
        pokemon: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default buscador;
