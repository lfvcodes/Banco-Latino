import React from "react";
import Navbar from "../../partials/dashboard/Navbar";
import CardButton from "../../components/CardButton";
import mainImage from "../../assets/img/banner_home2.png";
import BalanceBar from "../../partials/dashboard/BalanceBar";
import Footer from "../../partials/dashboard/Footer";
const Home = () => {
  return (
    <>
      <Navbar uconexion="15/07/2025 09:35am" />
      <section className="flex flex-col md:flex-row items-center justify-between bg-blue-50 py-10 md:py-20 px-4 md:px-16">
        {/* Imagen para móvil */}
        <div className="block md:hidden mb-6 w-full flex justify-center">
          <img
            src={mainImage}
            alt="Crea una Cuenta"
            title="Crea una Cuenta"
            width="360"
            height="100"
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col items-start md:pr-12 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">
            PRIMERO TÚ
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            Te invitamos a descargar y hacer uso de la app LatamBank, el futuro
            de nuestra banca en linea ha llegado, brindandote la rapidez y
            seguridad que mereces. ¡Gracias por preferirnos!
          </div>
        </div>

        <div className="hidden md:block flex-1">
          <img
            src={mainImage}
            alt="Crea una Cuenta"
            title="Crea una Cuenta"
            width="713"
            height="600"
            className="rounded-lg object-cover"
          />
        </div>
      </section>
      <div className="flex-1" />
      <BalanceBar balance="1,000.00" />

      {/* Cards de acciones */}
      <section className="bg-gray-200 py-8 pb-16 md:px-2">
        <div className="w-full mx-auto px-16 grid md:grid-cols-5 gap-2 md:gap-8">
          <CardButton
            href="/conocenos/contacto/"
            title="Posición"
            iconName="contact_mail"
          />
          <CardButton
            href="/invertir/"
            title="Movimientos"
            iconName="savings"
          />
          <CardButton
            href="/creditos/multicredito/"
            title="Transferir"
            iconName="credit_score"
          />
          <CardButton
            href="/creditos/multicredito/"
            title="Servicios"
            iconName="credit_score"
          />
          <CardButton
            href="/creditos/multicredito/"
            title="Tarjetas"
            iconName="credit_score"
          />
        </div>
      </section>
      <Footer className="bottom-0" />
    </>
  );
};

export default Home;
