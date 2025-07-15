import React from "react";

const Footer = ({ className }) => (
  <div className={className}>
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sección 1: Información del Banco */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Banco Latino</h3>
            <p className="text-sm">
              Somos un banco líder en el mercado, comprometidos con ofrecer
              soluciones financieras innovadoras y de calidad.
            </p>
            <p className="text-sm mt-2">
              Nuestro objetivo es impulsar el crecimiento económico de nuestros
              clientes y la comunidad.
            </p>
          </div>

          {/* Sección 2: Enlaces de Interés */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces de Interés</h3>
            <ul className="text-sm">
              <li>
                <a href="/productos" className="hover:text-blue-300">
                  Productos y Servicios
                </a>
              </li>
              <li>
                <a href="/inversiones" className="hover:text-blue-300">
                  Inversiones
                </a>
              </li>
              <li>
                <a href="/seguros" className="hover:text-blue-300">
                  Seguros
                </a>
              </li>
              <li>
                <a href="/creditos" className="hover:text-blue-300">
                  Créditos
                </a>
              </li>
              <li>
                <a href="/tasas" className="hover:text-blue-300">
                  Tasas y Tarifas
                </a>
              </li>
            </ul>
          </div>

          {/* Sección 3: Contacto y Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-sm">
              <span className="font-semibold">Teléfono:</span> +1 (555) 123-4567
            </p>
            <p className="text-sm">
              <span className="font-semibold">Email:</span>{" "}
              contacto@bancolatino.com
            </p>
            <p className="text-sm mt-2">Síguenos en nuestras redes sociales:</p>
            <div className="flex gap-4 mt-2">
              {/*  Aquí puedes agregar los iconos de tus redes sociales */}
              <a href="#" className="hover:text-blue-300">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-300">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-300">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-8 border-blue-700" />

        {/* Derechos Reservados y Enlaces Adicionales */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {new Date().getFullYear()} Banco Latino. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacidad" className="hover:text-blue-300">
              Política de Privacidad
            </a>
            <a href="/terminos" className="hover:text-blue-300">
              Términos y Condiciones
            </a>
            <a
              target="_blank"
              href="https://github.com/lfvcodes"
              className="hover:text-blue-300"
            >
              Desarrollado por lfvcodes
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
