import { useCallback, useEffect, useState } from "react";
import "../../style/main.scss";
import "./ListPokemons.scss";


//style dal przycisku, formy i błędu

const buttonStyle = {
  margin: "auto 12px",
  padding: "4px 12px",
  background: "teal",
  color: "black",
  borderRadius: 4,
};



const errorStyle = {
  fontSize: 24,
  fontWeight: "bold",
  color: "red",
  flexBasis: 2,
};


//fumckja do renderrowania statów poksa
const renderDetailedPokemon = (pokemon) => (
  <div>
    <img
      width='160'
      height='160'
      src={pokemon.sprites.front_default || "./../images/home_photo.png"}
      alt={pokemon.name}
    />
    <p>Name: {pokemon.name}</p>
    <ul style={{ paddingInline: 18, listStyle: 'none', }}>
      {pokemon.abilities &&
        pokemon.abilities.map((ability, index) => {
          return <li key={index}>Ability: {ability.ability.name}</li>;
        })}
    </ul>
    <p>Height: {pokemon.height}</p>
    <p>Id: {pokemon.id}</p>
  </div>
);

//komponenet listy poksów oraz usestaty
const ListPokemons = () => {
  const [pokemons, setPokemons] = useState([{}]);
  const [detailedPokemon, setDetailedPokemon] = useState({});
  const [searchName, setSearchName] = useState("");
  const [noPokemon, setNoPokemon] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const limit = 100;


  // fetchowanie z api

  const fetchPokemons = useCallback(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        setPokemons(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        setError(error.message);
        setLoading(false);
      });
  }, [offset]);

  //wywołanie fetcha i przyciski do przewijania

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  const handleNext = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const handlePrevious = () => {
    setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
  };


  //pobieranie danych o poksie
  const getPokemonDetails = (pokeUrl, searchByName) => {
    const url = searchByName
      ? `https://pokeapi.co/api/v2/pokemon/${pokeUrl}`
      : pokeUrl;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDetailedPokemon(data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        setNoPokemon(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
      <div
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
      >
        <div className="PokeScreenList">
          <div>
            <h2>Your pokemon list</h2>
          </div>
          <div
              className="searchBar"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "320px",
              }}
          >
            <input
                type="text"
                onChange={(event) => setSearchName(event.target.value)}
                name="Search Your Pokemon"
                placeholder="Search Your Pokemon"
                style={{borderRadius: 4, padding: "4px 12px"}}
            />
            <button
                onClick={() => getPokemonDetails(searchName, true)}
                type="submit"
                style={buttonStyle}
            >
              Search
            </button>
            {noPokemon && <p style={errorStyle}>{noPokemon}</p>}
          </div>
          <div className="Api_exercises">
            <div>
              <p>Pokemon Details:</p>
              {detailedPokemon.name
                  ? renderDetailedPokemon(detailedPokemon)
                  : "no data"}
            </div>
            <ul id="pokeListStyle">
              {pokemons.map((pokemon, index) => (
                  <li key={index} className="pokemon_item">
                    <h3>{pokemon.name}</h3>
                    <button
                        onClick={() => getPokemonDetails(pokemon.url, false)}
                        style={buttonStyle}
                    >
                      {pokemon.name}
                    </button>
                  </li>
              ))}
            </ul>
          </div>

        <div style={{marginTop: 16, display: 'flex', alignItems: 'center' }}>
          <button
              onClick={handlePrevious}
              disabled={offset === 0}
              style={buttonStyle}
          >
            Previous 100 Pokemons
          </button>
          <p>{`${offset + 1} - ${offset + 100}`}</p>
          <button onClick={handleNext} style={buttonStyle}>
            Next 100 Pokemons
          </button>
        </div>
        </div>
      </div>
  );
};
export default ListPokemons;
