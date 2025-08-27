import React, { useState } from "react";
import Navbar from "../../partials/dashboard/Navbar";
import Footer from "../../partials/dashboard/Footer";

const PagoMovil = () => {
  const [cuenta, setCuenta] = useState("0123-4567-8901-2345");
    const [saldo, setSaldo] = useState(1000);
    const [isChecked, setIsChecked] = useState(false);
    const [transferData, setTransferData] = useState({}); // Para datos de comprobante
    const [showDirectorioModal, setShowDirectorioModal] = useState(false);
    const [showComprobanteModal, setShowComprobanteModal] = useState(false);
  
    // Estados para los campos del formulario
    const [docNumber, setdocNumber] = useState("");
    const [beneficiaryName, setBeneficiaryName] = useState("");
    const [amount, setAmount] = useState("");
    const [concept, setConcept] = useState("");
  
    // Datos de prueba para el directorio de contactos
    const directorioContacts = [
      { alias: "Amigo Juan", description: "Cuenta Ahorro", doc_number: "9876543" },
      { alias: "Familia Maria", description: "Cuenta Corriente", doc_number: "27856365" },
      { alias: "Negocio XYZ", description: "Cuenta Empresa", doc_number: "22334455" },
    ];
  
    const verNombre = () => {
      setIsChecked(!isChecked);
    };
  
    const resetForm = () => {
      setdocNumber("");
      setBeneficiaryName("");
      setAmount("");
      setConcept("");
      setIsChecked(false);
      // Puedes añadir lógica para cerrar modales si están abiertos
      setShowDirectorioModal(false);
      setShowComprobanteModal(false);
    };
  
    const seleccionarContacto = (contact) => {
      setdocNumber(contact.doc_number);
      setBeneficiaryName(contact.alias); // O el nombre real del contacto
      setShowDirectorioModal(false); // Cierra el modal después de seleccionar
    };
  
    const transferir = (e) => {
      e.preventDefault();
      console.log("Realizando transferencia con:", {
        docNumber,
        beneficiaryName,
        amount,
        concept,
        saveToFrequent: isChecked,
      });
      setTransferData({
        date: new Date().toLocaleDateString(),
        fromAccount: cuenta,
        toAccount: docNumber,
        beneficiary: beneficiaryName || "Desconocido",
        amount: parseFloat(amount).toFixed(2),
        concept: concept,
        status: "Exitosa",
      });
      setShowComprobanteModal(true); // Muestra el modal de comprobante
      resetForm(); // Opcional: reiniciar el formulario después de la transferencia
    };
  
    return (
      <>
        <Navbar />
        <section className="min-h-screen w-full flex flex-col items-center bg-blue-50 py-10 px-4 md:px-16 pt-32">
          <div className="container mx-auto text-center mb-10 p-4 bg-white rounded-lg shadow-lg">
            <h2
              className="inline-block text-center font-bold px-4 py-2 mb-6"
              style={{ padding: "0.5rem" }}
            >
              PAGO MOVIL
            </h2>
            <div className="mt-0 border-2 border-blue-500 text-blue-800 rounded-lg w-full p-4">
              <div className="flex flex-col bg-transparent border-b-2 border-blue-200 pb-4 mb-4">
                <div className="block mb-2">
                  <span className="border border-blue-500 rounded-full px-3 py-1 text-sm font-medium">
                    Cuenta Corriente C/Intereses {cuenta}
                  </span>
                </div>
                <div className="mt-2 block">
                  <span className="font-bold">Saldo disponible: Bs. {saldo.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</span>
                </div>
              </div>
              <div className="pt-0">
                <div className="container mx-auto">
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <div className="block text-gray-700 font-bold md:w-1/2 mb-1 md:mb-0">
                      <small>
                        Haga click en el directorio de pagos para seleccionar los
                        datos del beneficiario:
                      </small>
                    </div>
                    <div className="w-full md:w-1/2 border-none border-b-2 border-blue-500 text-gray-900 focus:outline-none focus:border-blue-700 p-2 rounded-md">
                      <button
                        type="button"
                        onClick={() => setShowDirectorioModal(true)}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                      >
                        Directorio
                      </button>
                      
                      {showDirectorioModal && (
                        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"> {/* Opacidad cambiada aquí */}
                          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl transform scale-100 transition-transform duration-300 ease-out">
                            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                              <h5 className="text-xl font-semibold text-gray-800">
                                Contactos
                              </h5>
                              <button
                                type="button"
                                onClick={() => setShowDirectorioModal(false)}
                                className="text-gray-400 hover:text-gray-600 focus:outline-none p-1 rounded-full transition-colors duration-200"
                                aria-label="Close"
                              >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                              </button>
                            </div>
                            <div className="p-4 overflow-x-auto">
                              <table className="min-w-full text-left divide-y divide-gray-200">
                                <thead className="bg-blue-50 border-b-2 border-blue-300 text-blue-700">
                                  <tr>
                                    <th className="px-4 py-2 font-semibold">Alias</th>
                                    <th className="px-4 py-2 font-semibold">Descripción</th>
                                    <th className="px-4 py-2 font-semibold">Documento</th>
                                    <th className="px-4 py-2 font-semibold">Acción</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                  {directorioContacts.map((contact, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                      <td className="px-4 py-2 text-gray-800">{contact.alias}</td>
                                      <td className="px-4 py-2 text-gray-600">{contact.description}</td>
                                      <td className="px-4 py-2 text-gray-600">{contact.doc_number}</td>
                                      <td className="px-4 py-2">
                                        <button
                                          type="button"
                                          onClick={() => seleccionarContacto(contact)}
                                          className="bg-green-500 text-white font-bold py-1 px-3 rounded-md hover:bg-green-600 transition-colors duration-200"
                                        >
                                          Seleccionar
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                            <div className="flex justify-end p-4 border-t border-gray-200">
                              <button
                                type="button"
                                onClick={() => setShowDirectorioModal(false)}
                                className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                              >
                                Cerrar
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <form className="mt-6 space-y-4" onSubmit={transferir}>

                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <label htmlFor="destBank" className="block text-gray-700 font-bold md:w-1/4 mb-1 md:mb-0">
                      Operación:
                    </label>
                    <div className="w-full md:w-3/4">
                      <select className="w-full md:w-1/2 border-none bg-gray-100 border-b-2 border-blue-500 text-gray-900 focus:outline-none focus:border-blue-700 p-2 rounded-md">
                        <option value="P" selected>Personas</option>
                        <option value="C">Comercios</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <label htmlFor="docNumber" className="block text-gray-700 font-bold md:w-1/4 mb-1 md:mb-0">
                      # Documento
                    </label>
                    <div className="w-full md:w-3/4">
                      <input
                        type="text"
                        placeholder="ID Documento"
                        className="form-input w-full md:w-1/2 border-none bg-gray-100 border-b-2 border-blue-500 text-gray-900 focus:outline-none focus:border-blue-700 p-2 rounded-md"
                        id="docNumber"
                        value={docNumber}
                        onChange={(e) => setdocNumber(e.target.value)}
                      />
                      <small id="alias" className="text-gray-500 text-sm block mt-1">
                        
                      </small>
                    </div>
                  </div>  
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <label htmlFor="destBank" className="block text-gray-700 font-bold md:w-1/4 mb-1 md:mb-0">
                      Banco:
                    </label>
                    <div className="w-full md:w-3/4">
                      <select className="w-full md:w-1/2 border-none bg-gray-100 border-b-2 border-blue-500 text-gray-900 focus:outline-none focus:border-blue-700 p-2 rounded-md">
                        <option value="001">Banco 1</option>
                        <option value="0102">Banco 2</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <label htmlFor="telefono" className="block text-gray-700 font-bold md:w-1/4 mb-1 md:mb-0">
                      Teléfono
                    </label>
                    <div className="w-full md:w-3/4">
                    <input 
                      type="text" 
                      className="form-input w-full md:w-1/2 border-none bg-gray-100 border-b-2 border-blue-500 text-gray-900 focus:outline-none focus:border-blue-700 p-2 rounded-md" 
                      id="telefono" 
                      placeholder="Ej: +58 0414-1234567"
                    />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <label htmlFor="amount" className="block text-gray-700 font-bold md:w-1/4 mb-1 md:mb-0">
                      Monto:
                    </label>
                    <div className="w-full md:w-3/4">
                      <input
                        type="number"
                        className="form-input w-full md:w-1/2 border-none bg-gray-100 border-b-2 border-blue-500 text-gray-900 focus:outline-none focus:border-blue-700 p-2 rounded-md"
                        id="amount"
                        value={amount}
                        placeholder="Monto $"
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>
  
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <label htmlFor="concept" className="block text-gray-700 font-bold md:w-1/4 mb-1 md:mb-0">
                      Concepto:
                    </label>
                    <div className="w-full md:w-3/4">
                      <input
                        type="text"
                        className="form-input w-full md:w-1/2 border-none bg-gray-100 border-b-2 border-blue-500 text-gray-900 focus:outline-none focus:border-blue-700 p-2 rounded-md"
                        id="concept"
                        value={concept}
                        placeholder="Concepto"
                        onChange={(e) => setConcept(e.target.value)}
                      />
                    </div>
                  </div>

                  {isChecked && (
                    <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                      <label htmlFor="nombre" className="block text-gray-700 font-bold md:w-1/4 mb-1 md:mb-0">
                        Nombre:
                      </label>
                      <div className="w-full md:w-3/4">
                        <input
                          type="text"
                          className="form-input w-full md:w-1/2 border-none bg-gray-100 border-b-2 border-blue-500 text-gray-900 focus:outline-none focus:border-blue-700 p-2 rounded-md"
                          id="nombre"
                          value={beneficiaryName}
                          onChange={(e) => setBeneficiaryName(e.target.value)}
                        />
                      </div>
                    </div>
                  )}
  
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4 md:pl-1/4">
                    <label htmlFor="concept" className="block text-gray-700 font-bold md:w-1/2 mb-1 md:mb-0">
                    </label>
                    <label htmlFor="checkFreq" className="flex items-center text-gray-700 md:w-1/2">
                      <input
                        id="checkFreq"
                        checked={isChecked}
                        onChange={verNombre}
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />{" "}
                      <span className="ml-2">Agregar a contactos frecuentes</span>
                    </label>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <label htmlFor="concept" className="block text-gray-700 font-bold md:w-1/2 mb-1 md:mb-0">
                    </label>
                  <div className="flex flex-row justify-center items-center mt-6 space-x-2">
                    <button
                      onClick={resetForm}
                      type="button"
                      className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center"
                    >
                      Limpiar
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center"
                    >
                      Pagar
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </button>
                  </div>
                  </div>
                </form>
  
                {/* Modal de Comprobante (recreado con Tailwind y estado de React) */}
                {showComprobanteModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"> {/* Opacidad cambiada aquí */}
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-lg transform scale-100 transition-transform duration-300 ease-out">
                      <div className="flex justify-between items-center p-4 border-b border-gray-200">
                        <h4 className="text-2xl font-bold text-gray-800">
                          Transferencia Exitosa!
                        </h4>
                        <button
                          type="button"
                          onClick={() => setShowComprobanteModal(false)}
                          className="text-gray-400 hover:text-gray-600 focus:outline-none p-1 rounded-full transition-colors duration-200"
                          aria-label="Close"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                      </div>
                      <div className="p-4">
                        {/* Aquí iría tu componente Comprobante, comentado para este ejemplo */}
                        {/* <Comprobante transferData={transferData} /> */}
                        <div className="text-gray-700">
                          <p><strong>Fecha:</strong> {transferData.date}</p>
                          <p><strong>Cuenta Origen:</strong> {transferData.fromAccount}</p>
                          <p><strong>Cuenta Destino:</strong> {transferData.toAccount}</p>
                          <p><strong>Beneficiario:</strong> {transferData.beneficiary}</p>
                          <p><strong>Monto:</strong> Bs. {transferData.amount}</p>
                          <p><strong>Concepto:</strong> {transferData.concept}</p>
                          <p><strong>Estado:</strong> <span className="text-green-600 font-semibold">{transferData.status}</span></p>
                        </div>
                      </div>
                      <div className="flex justify-end p-4 border-t border-gray-200">
                        <button
                          type="button"
                          onClick={() => setShowComprobanteModal(false)}
                          className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
}

export default PagoMovil