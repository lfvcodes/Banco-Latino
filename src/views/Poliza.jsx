import React from "react";

const Poliza = () => {
  return (
    <>
      <section className="w-full bg-blue-50 px-4 md:px-16 py-10 min-h-screen">
        <div className="max-w-6xl mx-auto bg-white rounded shadow p-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">
            Póliza de Inversión - Banco Latino
          </h1>
          <p className="text-gray-600 mb-6 ">
            Fecha de emisión: 21 de junio de 2025
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-blue-700 font-semibold">Titular:</h2>
              <p className="text-gray-700">Juan Pérez</p>
            </div>
            <div>
              <h2 className="text-blue-700 font-semibold">Monto invertido:</h2>
              <p className="text-gray-700">USD $10,000</p>
            </div>
            <div>
              <h2 className="text-blue-700 font-semibold">Plazo:</h2>
              <p className="text-gray-700">180 días</p>
            </div>
            <div>
              <h2 className="text-blue-700 font-semibold">Tasa de interés:</h2>
              <p className="text-gray-700">6.5% anual</p>
            </div>
            <div>
              <h2 className="text-blue-700 font-semibold">
                Fecha de vencimiento:
              </h2>
              <p className="text-gray-700">17 de diciembre de 2025</p>
            </div>
            <div>
              <h2 className="text-blue-700 font-semibold">Estado:</h2>
              <p className="text-green-600 font-semibold">Activa</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Cláusulas relevantes
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                Los intereses se calculan al finalizar el período establecido.
              </li>
              <li>No se permite el retiro anticipado sin penalización.</li>
              <li>
                La póliza se renovará automáticamente a la tasa vigente si no se
                indica lo contrario.
              </li>
              <li>
                Los fondos están respaldados por garantías del Banco Latino
                según normativa legal.
              </li>
            </ul>
          </div>

          <div className="mt-8 text-right">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Descargar Póliza PDF
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Poliza;
