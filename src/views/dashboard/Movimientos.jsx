import React, { useEffect, useState } from "react";
 import Navbar from "../../partials/dashboard/Navbar";
 import Footer from "../../partials/dashboard/Footer";

const Movimientos = () => {
  
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const URL_API = import.meta.env.VITE_URL_API;
  const fetchMovements = (pageNumber = 1) => {
    fetch(`${URL_API}/movements?page=${pageNumber}&pageSize=10`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Accept-Language": "es",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error al obtener movimientos");
        return response.json();
      })
      .then((data) => {
        const newRows = data.map((item) => ({
          date: new Date(item.date).toLocaleDateString(),
          hour: item.hour,
          description: item.description,
          id: item.id,
          amount: item.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"),
          multiplier: item.movtype,
        }));
        setRows(newRows);
      })
      .catch((error) => console.error("Error en obtener movimientos:", error));
  };

  useEffect(() => {
    fetchMovements(currentPage);
  }, [currentPage, rowsPerPage]);

  
  const handleClick = (event, number) => {
    event.preventDefault();
    setCurrentPage(number);
  };

  const filteredRows = rows.filter((row) => {
    return Object.keys(row).some(key =>
      row[key].toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (startPage === 1 && totalPages > 5) {
      endPage = Math.min(totalPages, 5);
    }
    if (endPage === totalPages && totalPages > 5) {
      startPage = Math.max(1, totalPages - 4);
    }

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

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className="mx-1">
          <a
            className={`px-3 py-2 leading-tight rounded-lg ${
              i === currentPage
                ? "text-white bg-blue-500 border border-blue-500" 
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
              
              <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full text-center divide-y-2 divide-gray-200">
                  <thead className="bg-blue-100 border-b-2 border-blue-500 text-blue-700">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-gray-800" style={{ width: "10%" }}>Fecha</th>
                      <th className="px-4 py-3 font-semibold text-gray-800" style={{ width: "40%" }}>Descripción</th>
                      <th className="px-4 py-3 font-semibold text-gray-800" style={{ width: "10%" }}>Referencia</th>
                      <th className="px-4 py-3 font-semibold text-gray-800" style={{ width: "12%" }}>Monto</th>
                      <th className="px-4 py-3 font-semibold text-gray-800" style={{ width: "10%" }}>Tipo</th>
                    </tr>
                  </thead>
                  
                  <tbody className="divide-y divide-gray-200">
                    {filteredRows.length > 0 ? (
                      
                      filteredRows.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                          <td className="px-4 py-3 font-medium text-gray-700">{row.date} {row.hour}</td>
                          <td className="px-4 py-3 text-gray-600">{row.description}</td>
                          <td className="px-4 py-3 text-gray-600">#{row.id}</td>
                          <td className="px-4 py-3 text-gray-600">{row.multiplier === '+ Credito' ? '+' : '-'}{row.amount}</td>
                          <td className={`px-4 py-3 ${row.multiplier === '+ Credito' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}`} >{row.multiplier}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                          No se encontraron movimientos.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 flex justify-center bg-transparent mt-4">
                <nav>
                  <ul className="flex justify-center">
                    {renderPageNumbers()}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto text-center mt-6">
            <a href="/home">
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
