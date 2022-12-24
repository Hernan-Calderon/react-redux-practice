import React from "react";
import { connect } from "react-redux";

function CantidadPokemon(props) {
  return <div>Unidades: {props.GameShop.pokemon}</div>;
}

const mapStateToProps = (state) => {
  return {
    GameShop: state.GameShop,
  };
};

export default connect(mapStateToProps)(CantidadPokemon);
