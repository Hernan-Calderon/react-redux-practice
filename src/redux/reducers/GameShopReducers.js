import { BUY_POKEMON, RETURN_POKEMON } from "../actions/GameShopActions.js";

const estadoInicialJuegos = {
  pokemon: 20,
};

const GameShop = (state = estadoInicialJuegos, action) => {
  switch (action.type) {
    case BUY_POKEMON: {
      return {
        ...state,
        pokemon: state.pokemon - action.payLoad,
      };
    }
    case RETURN_POKEMON: {
      return {
        ...state,
        pokemon: state.pokemon + action.payLoad,
      };
    }
    default:
      return state;
  }
};

export default GameShop;
