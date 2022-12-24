import "./App.css";
import pokemon from "./img/pokemon.jpg";
//import CantidadPokemon from "./components/CantidadPokemon";
//import CompraPokemon from "./components/CompraPokemon";
import CantidadPokemonHooks from "./components/CantidadPokemonHooks";
import CompraPokemonHooks from "./components/CompraPokemonHooks";
import BuscadorPokemon from "./components/buscador/BuscadorPokemon";
import ResultadoPokemon from "./components/buscador/ResultadoPokemon";

import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  //console.log(store.getState());
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <div className="card m-5" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={pokemon}
                    className="img-fluid rounded-start"
                    alt="Pokemon"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">
                      <CantidadPokemonHooks />
                    </h3>
                    <br></br>
                    <div>
                      <CompraPokemonHooks />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 border-top pt-3">
            <BuscadorPokemon />
          </div>
          <div className="col-12">
            <ResultadoPokemon />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
