import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import CreateGame from "./features/games/CreateGame";
import EditGame from "./features/games/EditGame";
import GamesPage from "./features/games/GamesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GamesPage />} />
        <Route path="/create" element={<CreateGame />} />
        <Route path="/edit" element={<EditGame />} />
      </Route>
    </Routes>
  );
}

export default App;
