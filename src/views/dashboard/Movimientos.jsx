import React, { useEffect, useState } from "react";
 import Navbar from "../../partials/dashboard/Navbar";
 import Footer from "../../partials/dashboard/Footer";

const Movimientos = () => {
  
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  // Datos de prueba para simular los movimientos del banco.
  const dummyData = [
    {
      date: "01/07/2024",
      description: "Pago de servicios públicos",
      id: "REF001",
      amount: 50.00,
      multiplier: "- Debito",
      balance: 1450.00,
    },
    {
      date: "02/07/2024",
      description: "Depósito de nómina",
      id: "REF002",
      amount: 1200.00,
      multiplier: "+ Credito",
      balance: 2650.00,
    },
    {
      date: "03/07/2024",
      description: "Compra en supermercado",
      id: "REF003",
      amount: 75.50,
      multiplier: "- Debito",
      balance: 2574.50,
    },
    {
      date: "05/07/2024",
      description: "Retiro en cajero automático",
      id: "REF005",
      amount: 100.00,
      multiplier: "- Debito",
      balance: 2674.50,
    },
    {
      date: "06/07/2024",
      description: "Pago de cuota de préstamo",
      id: "REF006",
      amount: 300.00,
      multiplier: "- Debito",
      balance: 2374.50,
    },
    {
      date: "07/07/2024",
      description: "Intereses ganados",
      id: "REF007",
      amount: 5.25,
      multiplier: "+ Credito",
      balance: 2379.75,
    },
    {
      date: "08/07/2024",
      description: "Compra en línea",
      id: "REF008",
      amount: 45.99,
      multiplier: "- Debito",
      balance: 2333.76,
    },
    {
      date: "09/07/2024",
      description: "Recarga de saldo móvil",
      id: "REF009",
      amount: 15.00,
      multiplier: "- Debito",
      balance: 2318.76,
    },
    {
      date: "10/07/2024",
      description: "Reembolso de compra",
      id: "REF010",
      amount: 25.00,
      multiplier: "+ Credito",
      balance: 2343.76,
    },
    {
      date: "11/07/2024",
      description: "Pago de factura de internet",
      id: "REF011",
      amount: 60.00,
      multiplier: "- Debito",
      balance: 2283.76,
    },
    {
      date: "12/07/2024",
      description: "Depósito de cheque",
      id: "REF012",
      amount: 500.00,
      multiplier: "+ Credito",
      balance: 2783.76,
    },
    {
      date: "13/07/2024",
      description: "Compra de víveres",
      id: "REF013",
      amount: 88.70,
      multiplier: "- Debito",
      balance: 2695.06,
    },
    {
      date: "14/07/2024",
      description: "Cena en restaurante",
      id: "REF014",
      amount: 35.00,
      multiplier: "- Debito",
      balance: 2660.06,
    },
    {
      date: "15/07/2024",
      description: "Suscripción de streaming",
      id: "REF015",
      amount: 12.99,
      multiplier: "- Debito",
      balance: 2647.07,
    },
  ];

  const fetchMovements = (pageNumber) => {
    const userData = atob(sessionStorage.getItem("dt"));
    const mis_datos = JSON.parse(userData);
    const token = mis_datos.jwt;
    const myHeaders = new Headers();
    myHeaders.append("Accept-Language", "es");
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `${VITE_URL_API}/client/movement?page=${pageNumber}&page_size=10`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result)["data"];
        let newRows = data.map((item, index) => ({
          date: new Date(item.created_at).toLocaleDateString(),
          description: item.description,
          id: item.id,
          amount: item.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"),
          multiplier:(item.multiplier === 1) ? '+ Credito' : '- Debito',
          balance: item.balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"),
        }));
        setRows(newRows);
      })
      .catch((error) => console.error(error));
  };

  // useEffect para cargar los datos (ya sea de la API o los datos de prueba)
  useEffect(() => {
    // fetchMovements(currentPage);

    // Simulación de paginación con datos de prueba
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    // Formatear los números para que tengan comas y dos decimales
    const pagedData = dummyData.slice(startIndex, endIndex).map(item => ({
        ...item,
        amount: item.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"),
        balance: item.balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"),
    }));
    setRows(pagedData);

  }, [currentPage, rowsPerPage]); // El efecto se ejecuta cuando cambia la página o el número de filas por página

  // Manejador de clic para cambiar de página
  const handleClick = (event, number) => {
    event.preventDefault();
    setCurrentPage(number);
  };

  // Filtrado de filas basado en la consulta de búsqueda
  // Itera sobre todas las propiedades de cada fila para buscar la coincidencia
  const filteredRows = rows.filter((row) => {
    return Object.keys(row).some(key =>
      row[key].toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Calcula el número total de páginas basado en la longitud de los datos de prueba
  const totalPages = Math.ceil(dummyData.length / rowsPerPage);

  // Renderiza los números de página para la paginación
  const renderPageNumbers = () => {
    const pageNumbers = [];
    // Define un rango de páginas a mostrar alrededor de la página actual
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    // Ajusta el rango si estamos cerca del principio o del final para mostrar siempre un número fijo de páginas
    if (startPage === 1 && totalPages > 5) {
      endPage = Math.min(totalPages, 5);
    }
    if (endPage === totalPages && totalPages > 5) {
      startPage = Math.max(1, totalPages - 4);
    }

    // Añade el botón de "Primera página" y puntos suspensivos si es necesario
    if (startPage > 1) {
      pageNumbers.push(
        <li key="first" className="mx-1">
          <a
            className="px-3 py-2 leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded-lg"
            href="#"
            onClick={(e) => handleClick(e, 1)}
          >
            1
          </a>
        </li>
      );
      if (startPage > 2) {
        pageNumbers.push(
          <li key="dots-prev" className="mx-1 px-3 py-2 leading-tight text-gray-500">...</li>
        );
      }
    }

    // Añade los números de página dentro del rango calculado
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className="mx-1">
          <a
            className={`px-3 py-2 leading-tight rounded-lg ${
              i === currentPage
                ? "text-white bg-blue-500 border border-blue-500" // Estilo para la página activa
                : "text-blue-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700" // Estilo para páginas inactivas
            }`}
            href="#"
            onClick={(e) => handleClick(e, i)}
          >
            {i}
          </a>
        </li>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <li key="dots-next" className="mx-1 px-3 py-2 leading-tight text-gray-500">...</li>
        );
      }
      pageNumbers.push(
        <li key="last" className="mx-1">
          <a
            className="px-3 py-2 leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded-lg"
            href="#"
            onClick={(e) => handleClick(e, totalPages)}
          >
            {totalPages}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <Navbar/>
      <section className="min-h-screen w-full flex flex-col items-center bg-blue-50 py-10 px-4 md:px-16 pt-32">
        <div className="container mx-auto text-center mb-10 p-4 bg-white rounded-lg shadow-lg">
          <h2
            className="inline-block text-blue text-center font-bold px-4 py-2 mb-6"
          >
            CONSULTA DE MOVIMIENTOS
          </h2>
          <div className="w-full bg-transparent border-none">
            <div className="p-0">
              <div className="flex items-center p-2 mb-4 w-full bg-gray-100 rounded-md shadow-sm">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input
                  className="w-full border-none bg-transparent text-gray-900 focus:outline-none placeholder-gray-500 px-3 py-1"
                  placeholder="Buscar..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                ></input>
              </div>
              {/* Tabla de movimientos */}
              <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full text-center divide-y-2 divide-gray-200">
                  {/* Cabecera de la tabla */}
                  <thead className="bg-blue-100 border-b-2 border-blue-500 text-blue-700">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-gray-800" style={{ width: "10%" }}>Fecha</th>
                      <th className="px-4 py-3 font-semibold text-gray-800" style={{ width: "40%" }}>Descripción</th>
                      <th className="px-4 py-3 font-semibold text-gray-800" style={{ width: "10%" }}>Referencia</th>
                      <th className="px-4 py-3 font-semibold text-gray-800" style={{ width: "12%" }}>Monto</th>
                      <th className="px-4 py-3 font-semibold text-gray-800" style={{ width: "10%" }}>Tipo</th>
                      <th className="px-4 py-3 font-semibold text-gray-800" style={{ width: "20%" }}>Saldo</th>
                    </tr>
                  </thead>
                  {/* Cuerpo de la tabla */}
                  <tbody className="divide-y divide-gray-200">
                    {filteredRows.length > 0 ? (
                      // Mapea las filas filtradas para mostrarlas
                      filteredRows.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                          <td className="px-4 py-3 font-medium text-gray-700">{row.date}</td>
                          <td className="px-4 py-3 text-gray-600">{row.description}</td>
                          <td className="px-4 py-3 text-gray-600">#{row.id}</td>
                          {/* Muestra el monto con el signo correcto */}
                          <td className="px-4 py-3 text-gray-600">{row.multiplier === '+ Credito' ? '+' : '-'}{row.amount}</td>
                          {/* Aplica color al tipo de movimiento (crédito/débito) */}
                          <td className={`px-4 py-3 ${row.multiplier === '+ Credito' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}`} >{row.multiplier}</td>
                          <td className="px-4 py-3 text-gray-600">{row.balance}</td>
                        </tr>
                      ))
                    ) : (
                      // Mensaje si no hay resultados
                      <tr>
                        <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                          No se encontraron movimientos.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {/* Sección de paginación */}
              <div className="p-4 flex justify-center bg-transparent mt-4">
                <nav>
                  <ul className="flex justify-center">
                    {renderPageNumbers()} {/* Renderiza los botones de página */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto text-center mt-6">
            <a href="/home"> {/* Se cambió a <a> para que funcione sin react-router-dom */}
              <button
                className="bg-blue-500 text-white font-bold border-2 border-blue-500 text-center py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                type="button"
              >
                Regresar
              </button>
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Movimientos;
