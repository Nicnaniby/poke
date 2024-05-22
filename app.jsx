import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import ListPokemons from "./components/ListPokemons/ListPokemons";
import AddPokemonForm from "./components/AddPokemonForm/AddPokemonForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route
            path='AddPokemonForm/AddPokemonForm'
            element={<AddPokemonForm />}
          />
          <Route path='ListPokemons' element={<ListPokemons />} />
          <Route path='*' element={<errMSG />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
