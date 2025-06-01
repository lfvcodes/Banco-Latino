import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./views/Principal";
import Login from "./views/Login";

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
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
