import React, { useState } from "react";
import logo from "../../assets/img/logoBanco.png";

const Navbar = ({ uconexion }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-md fixed w-full z-10 bg-white">
      <nav className="shadow-md w-full bg-gray-50">
        <div className="flex items-center justify-between px-6 py-2">
          <div className="md:flex gap-4">
            <p className="flex">
              Buenos días fulanito Su Ultima Conexión fue: {uconexion}
            </p>
          </div>
          <a
            href="/login"
            className="bg-red-800 text-white font-semibold px-4 py-2 rounded hover:bg-blue-100 transition block text-center"
            onClick={() => setMenuOpen(false)}
          >
            Salir
          </a>
        </div>
      </nav>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center font-bold text-2xl tracking-wide">
          <a href="/">
            <img
              src={logo}
              alt="Banco Latino Logo"
              className="h-10 w-10 mr-2 rounded-full bg-white object-contain"
            />
          </a>
          <a href="/">
            <span className="text-blue-900">Banco Latino</span>
          </a>
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`block h-1 w-6 bg-blue-900 mb-1 rounded transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-blue-900 mb-1 rounded transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-blue-900 rounded transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        <div className="hidden md:flex gap-8 items-center">
          <ul
            className="flex gap-4 bg-blue-900 ms-10 text-white rounded-xl px-10 py-2 shadow-md"
            style={{ backgroundColor: "#1e3a8a", maxWidth: "600px" }}
          >
            <li>
              <a href="/posicion" className="hover:text-blue-300 transition">
                Posicion
              </a>
            </li>
            <li>
              <a href="/cuentas" className="hover:text-blue-300 transition">
                Cuentas
              </a>
            </li>
            <li>
              <a
                href="/transferencias"
                className="hover:text-blue-300 transition"
              >
                Transferencias
              </a>
            </li>
            <li>
              <a href="/pagos" className="hover:text-blue-300 transition">
                Pagos
              </a>
            </li>
            <li>
              <a href="/divisas" className="hover:text-blue-300 transition">
                Divisas
              </a>
            </li>
            <li>
              <a href="/seguridad" className="hover:text-blue-300 transition">
                Seguridad
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex gap-4 items-center rounded-xl px-8 py-2">
            {/* <li>
                <a
                  href="/Registro"
                  target="_blank"
                  className="bg-red-800 text-white font-semibold px-4 py-1 rounded hover:bg-blue-100 transition"
                >
                  Salir
                </a>
              </li> */}
          </ul>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4">
          <ul
            className="flex flex-col gap-2 bg-blue-900 text-white rounded-xl px-6 py-4 mb-2"
            style={{ backgroundColor: "#1e3a8a" }}
          >
            <li>
              <a href="/posicion" className="hover:text-blue-300 transition">
                Posicion
              </a>
            </li>
            <li>
              <a href="/cuentas" className="hover:text-blue-300 transition">
                Cuentas
              </a>
            </li>
            <li>
              <a
                href="/transferencias"
                className="hover:text-blue-300 transition"
              >
                Transferencias
              </a>
            </li>
            <li>
              <a href="/pagos" className="hover:text-blue-300 transition">
                Pagos
              </a>
            </li>
            <li>
              <a href="/divisas" className="hover:text-blue-300 transition">
                Divisas
              </a>
            </li>
            <li>
              <a href="/seguridad" className="hover:text-blue-300 transition">
                Seguridad
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 items-stretch rounded-xl px-6">
            {/* <li>
                <a
                  href="/login"
                  target="_blank"
                  className="bg-red-800 text-white font-semibold px-4 py-2 rounded hover:bg-blue-100 transition block text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Salir
                </a>
              </li> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
