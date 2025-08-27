import React from 'react';
import Navbar from '../../partials/dashboard/Navbar';
import Footer from '../../partials/dashboard/Footer';
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

const Seguridad = () => {
  return (
    	<>
			<Navbar/>
			<section className="min-h-screen w-full flex flex-col items-center bg-blue-50 py-10 px-4 md:px-16 pt-32">
        <div className="cards-section">
          <h2
            className="text-center font-bold px-4 py-2 mb-6 section-title"
            style={{ padding: "0.5rem" }}
          >
            Seguridad
          </h2>
          
          <div className="general-summary">
            <p className='text-center'>
              Protege tu información financiera con herramientas diseñadas para mantener tu cuenta segura.
            </p>
          </div>

          <h2 className="section-subtitle">Operaciones</h2>
          
            <div className="w-full mx-auto py-4 grid md:grid-cols-3 gap-2 md:gap-8">
              <CardButton
                href="/seguridad"
                title="Cambio de Clave"
                iconName="key"
              />
              <CardButton
                href="/seguridad"
                title="Cambio de PIN"
                iconName="numbers"
              />
              <CardButton
                href="/seguridad"
                title="Ver Token Especial"
                iconName="code"
              />
            </div>
        </div>
        
        <HelpSection />
              
      </section>
      <Footer className="bottom-0" />
    </>
  );
};

export default Seguridad;