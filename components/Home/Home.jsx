import "./Home.scss";
import NaviBtn from "../common/NaviBtn";

const Home = () => {
  return (
      <main>
          <div className="poke-screen">
              <img src="../../assets/27%20(1).png" className="poke-screen-img" alt={'pokedex-scren'}/>
              <NaviBtn to="ListPokemons">
                  <div className="btn btn__screen1">List Pokemons</div>
              </NaviBtn>
              <NaviBtn to="/AddPokemonForm/AddPokemonForm">
                  <div className="btn btn__screen2">Add New Pokemon</div>
              </NaviBtn>
          </div>
          <div className="features__container">
              <div className="feature__single">
                  <img className="icon2" src="../../assets/zoom_in_24dp_FILL0_wght400_GRAD0_opsz24.svg"></img>
                  <h2 className="features__title">Wyszukaj Pokemony!</h2>
                  <p className="features__description"> Skorzystaj z wyszukiwarki Pokemonów! <br/> Profesor Oak
                      zaprojektował Pokoedex tak abyś w każdym miejscu mógł znaleźć Pokemona, który Cię interesuje! </p>
              </div>
              <div className="feature__single">
                  <img className="icon2" src="../../assets/compare_24dp_FILL0_wght400_GRAD0_opsz24.svg"></img>
                  <h2 className="features__title">Porówaj Pokemony!</h2>
                  <p className="features__description"> Upewnij się czy Pokemon, którego chcesz wystawić do walki na
                      pewno sprosta oponentowi! <br/> Sprawdź naszą porówynwarkę! </p>
              </div>
              <div className="feature__single">
                  <img className="icon3" src="../../assets/mystery_24dp_FILL0_wght400_GRAD0_opsz24%20(1).svg"></img>
                  <h2 className="features__title">Twoje Pokemony!</h2>
                  <p className="features__description"> Złap je wszystkie! <br/> Sekcja TWOJE POKEMONY pozwoli Ci
                      stworzyć Twoją, unikatową listę pokemon! </p>
              </div>
          </div>
      </main>
  );
};
export default Home;
