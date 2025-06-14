import React from "react";
import Navbar from "../partials/Navbar";
import Breadcrumbs from "../partials/Breadcrumbs";
import Tabs from "../components/Tabs";

const tabs = [
  {
    label: "Créditos",
    icon: "credit_score",
    content: (
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <span className="material-icons mr-2 text-blue-600">
            credit_score
          </span>
          Créditos
        </h2>
        <p className="text-gray-700 mb-2">
          Ofrecemos créditos personales, comerciales y para emprendimientos, con
          tasas competitivas y plazos flexibles.
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Créditos personales</li>
          <li>Créditos comerciales</li>
          <li>Créditos para vehículos y vivienda</li>
        </ul>
      </div>
    ),
  },
  {
    label: "Inversiones",
    icon: "trending_up",
    content: (
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <span className="material-icons mr-2 text-green-600">
            trending_up
          </span>
          Inversiones
        </h2>
        <p className="text-gray-700 mb-2">
          Multiplica tu dinero con nuestros productos de inversión: depósitos a
          plazo, fondos y más.
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Depósitos a plazo fijo</li>
          <li>Fondos de inversión</li>
          <li>Asesoría financiera personalizada</li>
        </ul>
      </div>
    ),
  },
  {
    label: "Menudeo",
    icon: "storefront",
    content: (
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <span className="material-icons mr-2 text-purple-600">
            storefront
          </span>
          Menudeo
        </h2>
        <p className="text-gray-700 mb-2">
          Soluciones para pequeños comercios y emprendedores: puntos de venta,
          cobros digitales y más.
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Puntos de venta</li>
          <li>Cobros móviles</li>
          <li>Pagos QR y transferencias rápidas</li>
        </ul>
      </div>
    ),
  },
];

const Servicios = () => (
  <>
    <Navbar />
    <section className="w-full flex flex-col items-start bg-blue-50 pt-10 px-4 md:px-16">
      <Breadcrumbs items={[{ label: "Servicios", href: "/servicios" }]} />
    </section>
    <section className="w-full bg-blue-50 min-h-screen px-4 md:px-16 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Nuestros Servicios
        </h1>
        <Tabs tabs={tabs} />
      </div>
    </section>
  </>
);

export default Servicios;
