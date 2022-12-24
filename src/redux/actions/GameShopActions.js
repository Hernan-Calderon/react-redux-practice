export const BUY_POKEMON = "buyPokemon";
export const RETURN_POKEMON = "returnPokemon";

export const accionComprarPokemon = (cant) => {
  return {
    type: BUY_POKEMON,
    payLoad: cant,
  };
};

export const accionRetornarPokemon = (cant) => {
  return {
    type: RETURN_POKEMON,
    payLoad: cant,
  };
};
