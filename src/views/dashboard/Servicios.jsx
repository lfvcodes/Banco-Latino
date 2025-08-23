import React from 'react';
import Navbar from '../../partials/dashboard/Navbar';
import Footer from '../../partials/dashboard/Footer';
import CardButton from "../../components/CardButton";
import '../../assets/css/CardsSection.css';


const classButtonService = "flex flex-col bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition w-full"

export const Servicios = () => {
  return (
    	<>
			<Navbar/>
			<section className="min-h-screen w-full flex flex-col items-center bg-blue-50 py-10 px-4 md:px-16 pt-32">
        <div className="cards-section">
          <h2
            className="text-center font-bold px-4 py-2 mb-6 section-title"
            style={{ padding: "0.5rem" }}
          >
            <span className='material-icons text-blue-900 mr-2 text-3xl'>miscellaneous_services</span>
            Servicios
          </h2>
          
          <div className="general-summary">
            <p className='text-center'>
              Gestiona tus pagos de forma rápida y segura desde un solo lugar. Agua, luz, gas, telefonía e internet: todo al día con solo unos clics. Simplificamos tu rutina para que vivas con tranquilidad.
            </p>
          </div>

          <h2 className="section-subtitle">Operaciones</h2>
          
            <div className="w-full mx-auto py-4 grid md:grid-cols-1 gap-2 md:gap-8">
              <CardButton
                href="/dashboard/servicios/recarga"
                title="Recarga Telefonica"
                iconName="phone"
                className={classButtonService}
              />
              <CardButton
                href="/dashboard/servicios/energia"
                title="Energía Eléctrica"
                iconName="light" //
                className={classButtonService}
              />
              <CardButton
                href="/dashboard/servicios/agua"
                title="Agua"
                iconName="water" //
                className={classButtonService}
              />
              <CardButton
                href="/dashboard/servicios/gas"
                title="Gas"
                iconName="propane_tank" //
                className={classButtonService}
              />
              <CardButton
                href="/dashboard/servicios/Internet"
                title="Internet"
                iconName="wifi"
                className={classButtonService}
              />
              <CardButton
                href="/dashboard/servicios/tv"
                title="TV"
                iconName="tv"
                className={classButtonService}
              />
             
            </div>

        </div>
      </section>
      <Footer className="bottom-0" />
    </>
  );
};

export default Servicios;