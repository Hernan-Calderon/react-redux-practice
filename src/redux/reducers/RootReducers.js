import { combineReducers } from "redux";
import buscador from "./buscadorReducer";
import GameShop from "./GameShopReducers";

const RootReducers = combineReducers({
  GameShop,
  buscador,
});

export default RootReducers;
