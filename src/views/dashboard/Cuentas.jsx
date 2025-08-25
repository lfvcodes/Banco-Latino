import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../partials/dashboard/Navbar';
import Footer from '../../partials/dashboard/Footer';
import HelpSection from '../../partials/dashboard/HelpSection';

const Cuentas = () => {
  // Datos de ejemplo para las cuentas
  const [cuentas, setCuentas] = useState([
    {
      id: 1,
      tipo: "Cuenta Corriente",
      numero: "**** 4582",
      saldo: 12560.75,
      moneda: "USD",
      estado: "Activa",
      icono: "account_balance"
    },
    {
      id: 2,
      tipo: "Cuenta de Ahorros",
      numero: "**** 7821",
      saldo: 34890.20,
      moneda: "USD",
      estado: "Activa",
      icono: "savings"
    },
    {
      id: 3,
      tipo: "Cuenta Nómina",
      numero: "**** 3095",
      saldo: 5230.50,
      moneda: "USD",
      estado: "Activa",
      icono: "payments"
    }
  ]);

  // Estado para controlar qué cuenta está expandida
  const [cuentaExpandida, setCuentaExpandida] = useState(null);

  const toggleExpandirCuenta = (id) => {
    if (cuentaExpandida === id) {
      setCuentaExpandida(null);
    } else {
      setCuentaExpandida(id);
    }
  };

  return (
    <>
      <Navbar/>
      <section className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-blue-50 to-blue-100 py-10 px-4 md:px-16 pt-32">
        <div className="w-full max-w-6xl">
          {/* Encabezado */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center justify-center bg-blue-100 p-4 rounded-full mb-4">
              <span className="material-icons text-blue-900 text-4xl">account_balance</span>
            </div>
            <h2 className="text-3xl font-bold text-blue-900 text-center">
              Mis Cuentas Bancarias
            </h2>
            <p className="text-gray-600 text-center mt-2 max-w-2xl">
              Gestiona todas tus cuentas en un solo lugar. Revisa tus saldos, movimientos y realiza operaciones.
            </p>
          </div>

          <div className="bg-blue-900 text-white rounded-xl p-6 mb-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Resumen de Saldos</h3>
            <div className="flex flex-wrap justify-between items-center">
              <div>
                <p className="text-blue-200">Saldo Total</p>
                <p className="text-2xl font-bold">$52,681.45 USD</p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                {/* <button className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center">
                  <span className="material-icons mr-2">add</span>
                  Nueva Cuenta
                </button> */}
								<Link to="/transferir">
                <button className="bg-white text-blue-900 hover:bg-blue-100 py-2 px-4 rounded-lg flex items-center">
                  <span className="material-icons mr-2">compare_arrows</span>
                  Transferir
                </button>
								</Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tus Cuentas</h3>
            
            {cuentas.map((cuenta) => (
              <div key={cuenta.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div 
                  className="p-6 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpandirCuenta(cuenta.id)}
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="material-icons text-blue-900 text-3xl">{cuenta.icono}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{cuenta.tipo}</h4>
                      <p className="text-gray-600 text-sm">{cuenta.numero}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-gray-800">
                      {cuenta.saldo.toLocaleString('en-US', { style: 'currency', currency: cuenta.moneda })}
                    </p>
                    <div className="flex items-center justify-end mt-1">
                      <span className={`h-2 w-2 rounded-full mr-2 ${cuenta.estado === 'Activa' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                      <span className="text-sm text-gray-600">{cuenta.estado}</span>
                    </div>
                  </div>
                </div>
                
                {cuentaExpandida === cuenta.id && (
                  <div className="border-t border-gray-100 p-6 bg-blue-50">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Acciones Rápidas</h5>
                        <div className="space-y-2">
                          <button className="w-full text-left text-blue-600 hover:text-blue-800 flex items-center">
                            <span className="material-icons text-base mr-2">visibility</span>
                            Ver movimientos
                          </button>
                          <button className="w-full text-left text-blue-600 hover:text-blue-800 flex items-center">
                            <span className="material-icons text-base mr-2">compare_arrows</span>
                            Transferir fondos
                          </button>
                          <button className="w-full text-left text-blue-600 hover:text-blue-800 flex items-center">
                            <span className="material-icons text-base mr-2">download</span>
                            Descargar estado de cuenta
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Detalles de la Cuenta</h5>
                        <div className="space-y-1 text-sm">
                          <p><span className="text-gray-600">Tipo:</span> {cuenta.tipo}</p>
                          <p><span className="text-gray-600">Número completo:</span> 1234-5678-9012-{cuenta.numero.slice(-4)}</p>
                          <p><span className="text-gray-600">Moneda:</span> {cuenta.moneda}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Rendimiento</h5>
                        <div className="bg-white p-3 rounded-lg border border-gray-200">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Tasa de interés</span>
                            <span className="font-semibold text-green-600">1.2%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '45%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <HelpSection />
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Cuentas;