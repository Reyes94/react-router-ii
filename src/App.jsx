import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import CardPokemon from "./pages/CardPokemon";
import Home from "./pages/Home";
import Pokemones from "./pages/Pokemones";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<CardPokemon/>}/>
        </Routes>
      </main>
    </div>
  )
}
