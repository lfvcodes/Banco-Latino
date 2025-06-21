import React from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import Breadcrumbs from "../partials/Breadcrumbs";

const Terminos = () => {
  return (
    <>
      <Navbar />
      <section className="w-full flex flex-col items-start bg-blue-50 pt-10 px-4 md:px-16">
        <Breadcrumbs items={[{ label: "Terminos", href: "/terminos" }]} />
      </section>
      <section className="w-full bg-blue-50 min-h-screen px-4 md:px-16 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
          <h1>Términos y Condiciones - Banco Latino</h1>
          <p>Última actualización: 21 de junio de 2025</p>

          <section>
            <h2 className="font-bold">1. Aceptación</h2>
            <p>
              Al acceder y utilizar los servicios del Banco Latino, usted acepta
              quedar sujeto a estos términos y condiciones.
            </p>
          </section>

          <section>
            <h2 className="font-bold">2. Uso del servicio</h2>
            <p>
              Usted se compromete a utilizar este sitio y sus servicios de forma
              lícita, sin infringir derechos o limitar el uso y disfrute del
              sitio por parte de terceros.
            </p>
          </section>

          <section>
            <h2 className="font-bold">3. Privacidad</h2>
            <p>
              La información personal se tratará conforme a nuestra Política de
              Privacidad, la cual puede consultar en el sitio web.
            </p>
          </section>

          <section>
            <h2 className="font-bold">4. Modificaciones</h2>
            <p>
              Banco Latino se reserva el derecho de modificar estos términos en
              cualquier momento. Le notificaremos sobre los cambios importantes.
            </p>
          </section>

          <section>
            <h2 className="font-bold">5. Contacto</h2>
            <p>
              Si tiene preguntas, puede comunicarse con nosotros a través del
              formulario de contacto o visitando una de nuestras agencias.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Terminos;
