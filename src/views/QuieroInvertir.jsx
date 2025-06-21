import React from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import Breadcrumbs from "../partials/Breadcrumbs";
import Poliza from "./Poliza";

const QuieroInvertir = () => {
  return (
    <>
      <Navbar />
      <section className="w-full flex flex-col items-start bg-blue-50 pt-10 px-4 md:px-16">
        <Breadcrumbs
          items={[{ label: "Quiero Invertir", href: "/invertir" }]}
        />
      </section>

      <section className="w-full bg-blue-50 px-4 md:px-16 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
              Invierte con confianza en Banco Latino
            </h1>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
              Nuestro portafolio de inversión te ofrece opciones flexibles,
              seguras y rentables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                Plazo Fijo
              </h2>
              <p className="text-gray-600 mb-4">
                Inversiones desde 30 días con tasas competitivas y seguridad
                garantizada.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Simular Rendimiento
              </button>
            </div>

            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                Fondos de Inversión
              </h2>
              <p className="text-gray-600 mb-4">
                Diversifica tus inversiones con bajo riesgo y asesoría
                personalizada.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Ver Detalles
              </button>
            </div>

            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                Cuentas de Ahorro Inversionista
              </h2>
              <p className="text-gray-600 mb-4">
                Rentabilidad diaria sin perder acceso a tu dinero cuando lo
                necesites.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Abrir Cuenta
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">
              ¿Por qué invertir con nosotros?
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Contamos con más de 30 años de experiencia, respaldo financiero y
              un equipo de asesores dedicados a ayudarte a tomar la mejor
              decisión para tu futuro.
            </p>
          </div>
        </div>
      </section>
      <Poliza />
      <Footer />
    </>
  );
};

export default QuieroInvertir;
