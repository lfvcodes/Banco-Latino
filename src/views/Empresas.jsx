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
      <Footer />
    </>
  );
};

export default Empresas;
