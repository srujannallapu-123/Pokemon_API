import { Routes, Route } from "react-router-dom";
import Pokedox from "./Pokidata/Pokedox.jsx";
import PokInfo from "./Pokidata/PokInfo.jsx";

const App = () => (
  <Routes>
    <Route path="/" element={<Pokedox />} />
    <Route path="/pokinfo/:id" element={<PokInfo />} />
  </Routes>
);

export default App;

