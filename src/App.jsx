import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Pokemon from "./views/Pokemon";
import PokemonCard from "./components/PokemonCard";

function App() {

  return (
    <div>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemon" element={<Pokemon />} />
        <Route path="/Pokemon/:PokemonID" element={<PokemonCard />} />
     </Routes>
    </div>
  )
}

export default App
