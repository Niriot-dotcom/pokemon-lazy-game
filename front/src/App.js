import NavbarC from "./components/Navbar/navbar";
import { Route, Routes, Navigate } from "react-router-dom";

// Pages
import DashboardPage from "./components/Home/home";
import LoginPage from "./components/Login/login";
import PokedexPage from "./components/Pokedex/pokedex";
import GamePage from "./components/Game/game";
import ProfilePage from "./components/Profile/profile";

function App() {
  return (
    <>
      <NavbarC />
      <Routes>
        <Route exact={true} path="/" element={<Navigate to="/login" />} />
        <Route exact={true} path="/dashboard" element={<DashboardPage />} />
        <Route exact={true} path="/login" element={<LoginPage />} />
        <Route exact={true} path="/pokedex" element={<PokedexPage />} />
        <Route exact={true} path="/game" element={<GamePage />} />
        <Route exact={true} path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
