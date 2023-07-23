import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import Listado from "./components/Listado";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/listado" element={<Listado />} />
          <Route
            path="/personaje/:nombre/:nombreOriginalJapones/:afiliacion/:imagen3/:ubicacion/:salud/:recompensa/:ecosDeSangreObtenidos/:defensaFisica/:defContundente/:defensaContraataque/:defensaFuego/:defensaRelampago/:defensaSangre/:defensaArcana/:defensaVenenoLento/:defensaVenenoRapido/:puntoDebil/:debilidad/:fasesDurantePelea/:imagen4"
            element={<Detail />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
