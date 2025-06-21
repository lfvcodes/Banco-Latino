import React from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import mainImage from "../assets/img/banner_home.webp";
import mainImage2 from "../assets/img/checkHome.webp";
import StorePhone from "../partials/StorePhone";
import CardAction from "../components/CardAction";

export function Principal() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col md:flex-row items-center justify-between bg-blue-50 py-10 md:py-20 px-4 md:px-16">
        {/* Imagen para móvil */}
        <div className="block md:hidden mb-6 w-full flex justify-center">
          <img
            src={mainImage}
            alt="Crea una Cuenta"
            title="Crea una Cuenta"
            width="360"
            height="100"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col items-start md:pr-12 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">
            PRIMERO TÚ
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-800 mb-6">
            <span>Abre tu cuenta en minutos</span>, sin ir al banco y sin
            depósito inicial
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a
              className="bg-blue-900 text-white px-6 py-3 rounded font-semibold shadow hover:bg-blue-800 transition flex items-center"
              href="/Registro"
              target="_blank"
              title="Crea una Cuenta"
            >
              Crea una Cuenta
              <span className="material-icons ml-2 text-base">
                arrow_forward
              </span>
            </a>
            <a
              className="bg-white text-blue-900 px-6 py-3 rounded font-semibold shadow hover:bg-blue-100 transition flex items-center"
              title="Ingresa a Banca Personas"
              target="_blank"
              href="/Login"
            >
              Ingresa a Banca Personas
              <span className="material-icons ml-2 text-base">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        <div className="hidden md:block flex-1">
          <img
            src={mainImage}
            alt="Crea una Cuenta"
            title="Crea una Cuenta"
            width="713"
            height="500"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Cards de acciones */}
      <section className="bg-gray-200 py-10 px-4 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardAction
            href="/conocenos/contacto/"
            title="Quiero contactarme"
            iconName="contact_mail"
            description="Conoce nuestros puntos de atención y números"
            linkText="Ver más"
          />
          <CardAction
            href="/invertir/"
            title="Quiero invertir"
            iconName="savings"
            description="Invierte en una póliza con una tasa de hasta 6.70%."
            linkText="Ver Póliza"
          />
          <CardAction
            href="/creditos/multicredito/"
            title="Quiero un Crédito"
            iconName="credit_score"
            description="Define el monto y las cuotas en línea"
            linkText="Ver Multicrédito"
          />
        </div>
      </section>

      {/* Sección informativa App móvil */}
      <section className="bg-white py-12 px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Imagen */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src={mainImage2}
              alt="Sigue estos pasos para pagar tus Servicios"
              title="Sigue estos pasos para pagar tus Servicios"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          {/* Información */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Abre tu Cuenta de Ahorros más rápido desde tu App
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="material-icons text-blue-700 mr-2">
                  check_circle
                </span>
                <span>Contrata tu cuenta en menos de 5 minutos.</span>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-blue-700 mr-2">
                  check_circle
                </span>
                <span>
                  Recibe en tu correo toda la información importante sobre tu
                  cuenta.
                </span>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-blue-700 mr-2">
                  check_circle
                </span>
                <span>
                  Haz todas tus transacciones desde la App, directamente en tu
                  celular.
                </span>
              </li>
            </ul>
            <a
              className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded font-semibold shadow hover:bg-blue-800 transition"
              href="#"
              target="_self"
              title="VER MÁS BENEFICIOS"
            >
              VER MÁS BENEFICIOS
              <span className="material-icons ml-2 text-base">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </section>
      <StorePhone />
      <Footer />
    </>
  );
}

export default Principal;
