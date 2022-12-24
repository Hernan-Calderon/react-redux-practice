import axios from "axios";

export const FETCH_POKEMON_REQUEST = "fetchPokemonRequest";
export const FETCH_POKEMON_SUCCESS = "fetchPokemonSuccess";
export const FETCH_POKEMON_FAILURE = "fetchPokemonFailure";

export const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};

export const fetchPokemonSuccess = (pokemon) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon,
  };
};

export const fetchPokemonFailure = (error) => {
  return {
    type: FETCH_POKEMON_FAILURE,
    payload: error,
  };
};

const fetchPokemon = (valor) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
      .then((respuesta) => {
        dispatch(fetchPokemonSuccess([respuesta.data]));
      })
      .catch((error) => {
        dispatch(fetchPokemonFailure("¡No se encontró el pokemon!"));
      });
  };
};

export default fetchPokemon;
