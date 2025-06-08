import React from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import imgItem1 from "../assets/img/empresas-item1.webp";
import imgItem2 from "../assets/img/empresas-item2.png";
import imgItem3 from "../assets/img/empresas-item3.png";
import Breadcrumbs from "../partials/Breadcrumbs";

const Personas = () => {
  return (
    <>
      <Navbar />
      <section className="w-full flex flex-col md:flex-column items-start bg-blue-50 pt-10 px-4 md:px-16">
        <Breadcrumbs items={[{ label: "Personas", href: "/personas" }]} />
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between bg-blue-50 py-10 px-4 md:px-16">
        <div className="my-8 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="container mx-auto p-4">
            <div className="bg-white p-4 rounded shadow items-center">
              <img className="w-3/4 mb-4" src={imgItem1} alt="emprendedores" />
              <h2 className="text-3xl font-bold mb-4">
                Servicios de cobro y recaudación
              </h2>
              <p className="text-lg mb-6">
                Métodos de pago y recaudación para tu comercio
              </p>
            </div>
          </div>

          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
              {/* Aquí puedes agregar tarjetas o componentes para mostrar las personas */}
              <div className="bg-white p-4 rounded shadow">
                <img className="w-50" src={imgItem3} />
                <h2 className="text-xl font-semibold">
                  Recaudos para abrir una cuenta
                </h2>
                <p>
                  Conoce todos los recaudos necesarios para solicitar una Cuenta
                </p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <img className="w-50" src={imgItem2} />
                <h2 className="text-xl font-semibold">Tipos de Cuentas</h2>
                <p>Conoce las diferentes cuentas y planes de ahorro</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between bg-blue-50 pb-4 px-4 md:px-16">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Preguntas Frecuentes
          </h1>
          <div className="space-y-4">
            <details className="bg-white rounded shadow p-4">
              <summary className="cursor-pointer font-semibold text-lg outline-none focus:ring-2 focus:ring-blue-400">
                ¿Cómo abro una cuenta en Banco Latino?
              </summary>
              <p className="mt-2 text-gray-700">
                Puedes abrir una cuenta acercándote a cualquiera de nuestras
                agencias con tu cédula de identidad y los recaudos necesarios.
                También puedes iniciar el proceso en línea desde nuestra página
                web.
              </p>
            </details>
            <details className="bg-white rounded shadow p-4">
              <summary className="cursor-pointer font-semibold text-lg outline-none focus:ring-2 focus:ring-blue-400">
                ¿Cuáles son los requisitos para solicitar una tarjeta de débito?
              </summary>
              <p className="mt-2 text-gray-700">
                Debes tener una cuenta activa en el banco y presentar tu cédula
                de identidad vigente. Consulta los recaudos adicionales en
                nuestra sección de productos.
              </p>
            </details>
            <details className="bg-white rounded shadow p-4">
              <summary className="cursor-pointer font-semibold text-lg outline-none focus:ring-2 focus:ring-blue-400">
                ¿Qué tipos de cuentas ofrecen?
              </summary>
              <p className="mt-2 text-gray-700">
                Ofrecemos cuentas de ahorro, cuentas corrientes y cuentas en
                moneda extranjera. Cada una tiene beneficios y requisitos
                distintos.
              </p>
            </details>
            <details className="bg-white rounded shadow p-4">
              <summary className="cursor-pointer font-semibold text-lg outline-none focus:ring-2 focus:ring-blue-400">
                ¿Cómo puedo recuperar mi usuario o clave?
              </summary>
              <p className="mt-2 text-gray-700">
                Puedes recuperar tu usuario o clave desde la opción “¿Olvidaste
                tu clave?” en nuestra banca en línea, o llamando a nuestro
                centro de atención telefónica.
              </p>
            </details>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Personas;
