import React from "react";
import Navbar from "../partials/Navbar";
import Breadcrumbs from "../partials/Breadcrumbs";

const Nosotros = () => {
  return (
    <>
      <Navbar />
      <section className="w-full flex flex-col items-start bg-blue-50 pt-10 px-4 md:px-16">
        <Breadcrumbs items={[{ label: "Nosotros", href: "/nosotros" }]} />
      </section>
      <section className="w-full flex flex-col items-center bg-blue-50 py-10 px-4 md:px-16">
        <div className="w-full max-w-3xl p-6 bg-blue-600 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Banco Latino</h1>
          <p className="text-lg text-center italic mb-4">
            Tu aliado financiero para un futuro próspero.
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Misión</h2>
            <p className="text-gray-300">
              Facilitar soluciones financieras innovadoras y accesibles que
              impulsen el crecimiento económico de nuestros clientes, brindando
              seguridad, confianza y excelencia en el servicio.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Visión</h2>
            <p className="text-gray-300">
              Ser el banco líder en América Latina, reconocido por nuestra
              capacidad de adaptación a las nuevas tecnologías, nuestra solidez
              financiera y nuestro compromiso con el desarrollo sostenible.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Descripción</h2>
            <p className="text-gray-300">
              Banco Latino es una institución financiera comprometida con el
              progreso de sus clientes y comunidades. Ofrecemos productos y
              servicios diseñados para satisfacer las necesidades cambiantes del
              mercado, priorizando la transparencia, la eficiencia y la
              confianza. Con un equipo de expertos y una plataforma moderna,
              trabajamos para ser el puente hacia nuevas oportunidades
              financieras.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
