import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/dashboard/Home";
import Principal from "./views/Principal";
import Registro from "./views/Registro";
import Nosotros from "./views/Nosotros";
import Login from "./views/Login";
import Empresas from "./views/Empresas";
import Personas from "./views/Personas";
import Servicios from "./views/Servicios";
import Terminos from "./views/Terminos";
import Privacidad from "./views/Privacidad";
import QuieroInvertir from "./views/QuieroInvertir";

// Componente simple para 404
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-5xl font-bold text-blue-900 mb-4">404</h1>
      <p className="text-xl text-blue-700 mb-6">Página no encontrada</p>
      <a href="/" className="text-blue-900 underline hover:text-blue-700">
        Volver al inicio
      </a>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Principal />} />
      <Route path="/" element={<Principal />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/empresas" element={<Empresas />} />
      <Route path="/personas" element={<Personas />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/privacidad" element={<Privacidad />} />
      <Route path="/invertir" element={<QuieroInvertir />} />
      {/* Ruta para manejar 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
