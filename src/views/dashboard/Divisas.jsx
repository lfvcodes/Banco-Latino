import React from 'react';
import Navbar from '../../partials/dashboard/Navbar';
import Footer from '../../partials/dashboard/Footer';
import CardHistory from '../../components/CardHistory';
import CardButton from "../../components/CardButton";
import HelpSection from '../../partials/dashboard/HelpSection';
import '../../assets/css/CardsSection.css';

const transactions = [
  { id: 1, date: '15/08/2025', description: 'Compra Divisa', amount: +55.75 },
  { id: 2, date: '14/08/2025', description: 'Retiro en Taquilla', amount: -100.00 },
  { id: 3, date: '12/08/2025', description: 'Retiro en Taquilla', amount: -12.99 },
  { id: 1, date: '10/08/2025', description: 'Compra Divisa', amount: +49.99 },
  { id: 1, date: '05/08/2025', description: 'Compra Divisa', amount: +9.99 },
];

const Divisas = () => {
  return (
    	<>
			<Navbar/>
			<section className="min-h-screen w-full flex flex-col items-center bg-blue-50 py-10 px-4 md:px-16 pt-32">
        <div className="cards-section">
          <h2
            className="text-center font-bold px-4 py-2 mb-6 section-title"
            style={{ padding: "0.5rem" }}
          >
            Divisas
          </h2>
          
          <div className="general-summary">
            <p className='text-center'>
              Compra y venta de divisas en línea por Banco Latino, con las opciones: Mesa de Cambio, Menudeo e Intervención Cambiaria. Pagos efectivos al momento con Pago Móvil Latino
            </p>
          </div>

          <h2 className="section-subtitle">Operaciones</h2>
          
            <div className="w-full mx-auto py-4 grid md:grid-cols-3 gap-2 md:gap-8">
              <CardButton
                href="/divisas"
                title="Compra de Divisas"
                iconName="wallet"
              />
              <CardButton
                href="/divisas/"
                title="Venta de Divisas"
                iconName="swap_vert"
              />
              <CardButton
                href="/divisas/"
                title="Menudeo y mesa de cambio P2P"
                iconName="send"
              />
            </div>

          <h2 className="section-subtitle">📊 Historial y Movimientos</h2>
          <CardHistory movements={transactions} />
        </div>
        
        <HelpSection />
              
      </section>
      <Footer className="bottom-0" />
    </>
  );
};

export default Divisas;