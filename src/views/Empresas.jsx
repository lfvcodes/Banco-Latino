import React from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import imgItem1 from "../assets/img/empresas-item1.webp";
import imgItem2 from "../assets/img/empresas-item2.png";
import imgItem3 from "../assets/img/empresas-item3.png";
import Breadcrumbs from "../partials/Breadcrumbs";

const Empresas = () => {
  return (
    <>
      <Navbar />
      <section className="w-full flex flex-col md:flex-column items-start bg-blue-50 pt-10 px-4 md:px-16">
        <Breadcrumbs items={[{ label: "Empresas", href: "/empresas" }]} />
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between bg-blue-50 py-4 px-4 md:px-16">
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
              {/* Aquí puedes agregar tarjetas o componentes para mostrar las empresas */}
              <div className="bg-white p-4 rounded shadow">
                <img className="w-50" src={imgItem3} />
                <h2 className="text-xl font-semibold">
                  Gestiona tu empresa en línea
                </h2>
                <p>
                  Soluciones de banca electrónica para la tesorería de tu
                  negocio
                </p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <img className="w-50" src={imgItem2} />
                <h2 className="text-xl font-semibold">
                  Planes adaptados a tu empresa
                </h2>
                <p>Conoce los beneficios del servicio Nómina de Banco Latino</p>
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
                ¿Cuáles son los requisitos para abrir una cuenta de empresa?
              </summary>
              <p className="mt-2 text-gray-700">
                Para abrir una cuenta de empresa necesitas el RIF de la empresa,
                documento constitutivo, cédula de los representantes legales y
                referencias bancarias y comerciales. Consulta la lista completa
                en nuestra web.
              </p>
            </details>
            <details className="bg-white rounded shadow p-4">
              <summary className="cursor-pointer font-semibold text-lg outline-none focus:ring-2 focus:ring-blue-400">
                ¿Qué tipos de cuentas empresariales ofrece Banco Latino?
              </summary>
              <p className="mt-2 text-gray-700">
                Ofrecemos cuentas corrientes para empresas, cuentas nómina y
                cuentas en moneda extranjera, adaptadas a las necesidades de tu
                negocio.
              </p>
            </details>
            <details className="bg-white rounded shadow p-4">
              <summary className="cursor-pointer font-semibold text-lg outline-none focus:ring-2 focus:ring-blue-400">
                ¿Cómo puedo gestionar la nómina de mi empresa?
              </summary>
              <p className="mt-2 text-gray-700">
                Puedes gestionar la nómina de tu empresa a través de nuestra
                plataforma de banca en línea, permitiendo pagos masivos y
                administración eficiente de empleados.
              </p>
            </details>
            <details className="bg-white rounded shadow p-4">
              <summary className="cursor-pointer font-semibold text-lg outline-none focus:ring-2 focus:ring-blue-400">
                ¿Qué servicios digitales están disponibles para empresas?
              </summary>
              <p className="mt-2 text-gray-700">
                Dispones de banca en línea empresarial, pagos electrónicos,
                transferencias nacionales e internacionales y herramientas de
                gestión de tesorería.
              </p>
            </details>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Empresas;
