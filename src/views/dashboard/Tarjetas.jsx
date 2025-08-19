import React from 'react';
import Navbar from '../../partials/dashboard/Navbar';
import Footer from '../../partials/dashboard/Footer';
import CardType from '../../components/CardType';
import CardManagement from '../../components/CardManagement';
import CardHistory from '../../components/CardHistory';
import '../../assets/css/CardsSection.css';

const Tarjetas = () => {
  return (
    	<>
			<Navbar/>
			<section className="min-h-screen w-full flex flex-col items-center bg-blue-50 py-10 px-4 md:px-16 pt-32">
        <div className="cards-section">
          <h2
            className="text-center font-bold px-4 py-2 mb-6 section-title"
            style={{ padding: "0.5rem" }}
          >
            TARJETAS
          </h2>
          
          {/* 1. Resumen General */}
          <div className="general-summary">
            <p>
              Gestiona tus finanzas de manera sencilla con nuestra variedad de tarjetas. Ya sea para el uso diario o para compras importantes, nuestras tarjetas te ofrecen seguridad, aceptación internacional y beneficios exclusivos.
            </p>
          </div>


          {/* 2. Tipos de Tarjetas */}
          <h2 className="section-subtitle">💳 Tipos de Tarjetas</h2>
          <CardType />

          <div className="w-full flex">

            {/* 3. Gestión de Tarjetas */}
            <div className="w-full flex-col">
              <h2 className="section-subtitle">⚙️ Gestión de Tarjetas</h2>
              <CardManagement />
            </div>

            {/* 4. Seguridad */}
            <div className="w-full flex-col">
              <h2 className="section-subtitle">🔒 Seguridad</h2>
              <div className="card-security-container">
                <ul>
                  <li>Autenticación 2FA para operaciones (Activo)</li>
                  <li>Control de uso internacional (Configurable)</li>
                  <li>Alertas por transacciones sospechosas (Activo)</li>
                  <li>Configuración de PIN y CVV dinámico (Próximamente)</li>
                </ul>
              </div>
            </div>
          </div>

          <hr />

          {/* 5. Historial y Movimientos */}
          <h2 className="section-subtitle">📊 Historial y Movimientos</h2>
          <CardHistory />
        </div>
      </section>
      <Footer className="bottom-0" />
    </>
  );
};

export default Tarjetas;