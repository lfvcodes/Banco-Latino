import React, { useState } from "react";
import imageLogo from "../assets/img/logoBanco.png"; // Asegúrate de tener esta imagen en la ruta correcta
const Login = () => {
  // Estados para mostrar u ocultar campos
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handlers
  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de login aquí
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Lado izquierdo: branding e imágenes */}
      <div className="hidden md:flex flex-col justify-between w-1/2 bg-gradient-to-b from-blue-900 to-blue-700 p-8">
        <div className="text-white mt-12">
          <h2 className="text-xl font-bold mb-8">BANCO LATINO</h2>
          <h3 className="text-lg font-bold mb-4">Consejos de seguridad</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Banco Latino no solicita tu usuario ni contraseña por enlaces de
              correos electrónicos, llamadas o mensajes.
            </li>
            <li>
              Actualiza periódicamente tu clave de correo electrónico con una
              complejidad adecuada.
            </li>
            <li>
              Cada ingreso a la Banca Virtual, el sistema envía un código de
              seguridad temporal a tu número de celular registrado.
            </li>
            <li>
              Verifica siempre que en tu navegador aparezca la dirección
              correcta:
              <span className="ms-2 underline">
                https://www.bancolatino.com
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Lado derecho: formulario */}
      <div className="flex flex-1 flex-col justify-center items-center p-6">
        <header>
          <img src={imageLogo} alt="Banco Latino" className="h-12 mb-8" />
        </header>
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">
            Banca Virtual
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Ingrese con usuario o cree uno por primera vez.
          </p>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Usuario
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="off"
                maxLength={20}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                maxLength={14}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-3 mt-4">
              <button
                type="submit"
                className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 font-semibold w-full"
              >
                Iniciar sesión
              </button>
              <button
                type="button"
                className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-500 font-semibold w-full"
              >
                Crear Usuario
              </button>
              <div className="flex justify-between mt-2">
                <a href="#" className="text-blue-700 text-sm hover:underline">
                  Olvidé mi usuario
                </a>
                <a href="#" className="text-blue-700 text-sm hover:underline">
                  Olvidé mi contraseña
                </a>
              </div>
            </div>
          </form>
          <div className="mt-8 text-center">
            <a
              href="#"
              className="text-blue-700 font-bold text-sm hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Centro de Ayuda
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
