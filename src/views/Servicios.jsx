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
        <h2 className="text-2xl font-bold mb-2 flex items-center text-blue-700">
          <span className="material-icons mr-2 text-blue-600">storefront</span>
          Menudeo
        </h2>
        <p className="text-gray-700 mb-4">
          Compra y vende Divisas con los fondos disponibles que mantengas en tus
          Cuentas, los 365 días del año a través de la App y NET, dentro de los
          horarios establecidos.
        </p>
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Condiciones</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Debes tener cuentas activas y con saldo disponible en.</li>
            <li>Tu información debe estar actualizada.</li>
            <li>
              Horarios: En línea de 4:00 a.m. a 10:00 p.m. / En Agencias de 8:30
              a.m. a 12:00 m.
            </li>
            <li>
              Operación sujeta a disponibilidad de fondos y los límites
              establecidos en la normativa. Ciertas condiciones aplican.
            </li>
            <li>
              Comisión de acuerdo al{" "}
              <a
                href="#"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
                title="TARIFARIO emitido por BCV"
              >
                TARIFARIO emitido por BCV
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 underline">
                Órdenes de Compra - Venta
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Consulta:</h4>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              <a
                href="#"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
                title="Paso a paso para la Compra de Divisas por Menudeo en Línea (Solo persona Natural)."
              >
                Paso a paso para la Compra de Divisas por Menudeo en Línea (Solo
                persona Natural)
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
                title="Paso a paso para la Venta de Divisas por Menudeo en Línea."
              >
                Paso a paso para la Venta de Divisas por Menudeo en Línea
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
                title="Convenio Cambiario N°1."
              >
                Convenio Cambiario N°1
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
                title="Aviso Oficial."
              >
                Aviso Oficial
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
                title="Circular Operaciones al Menudeo - Banco Central de Venezuela"
              >
                Circular Operaciones al Menudeo - Banco Central de Venezuela
              </a>
            </li>
          </ul>
        </div>
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
