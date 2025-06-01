import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="mb-4 md:mb-0 font-semibold text-lg">
          © {new Date().getFullYear()} Banco Latino. Todos los derechos
          reservados.
        </div>
        <div className="flex gap-6">
          <a href="/privacidad" className="hover:text-blue-300 transition">
            Política de Privacidad
          </a>
          <a href="/terminos" className="hover:text-blue-300 transition">
            Términos y Condiciones
          </a>
        </div>
        <span>
          Desarrollado por:{" "}
          <a target="_blank" href="https://github.com/lfvcodes">
            lfvcodes
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
