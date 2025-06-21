import React from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import Breadcrumbs from "../partials/Breadcrumbs";

const Privacidad = () => {
  return (
    <>
      <Navbar />
      <section className="w-full flex flex-col items-start bg-blue-50 pt-10 px-4 md:px-16">
        <Breadcrumbs
          items={[{ label: "Política de Privacidad", href: "/privacidad" }]}
        />
      </section>
      <section className="w-full bg-blue-50 min-h-screen px-4 md:px-16 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
          <h1>Política de Privacidad - Banco Latino</h1>
          <p>Última actualización: 21 de junio de 2025</p>

          <section>
            <h2 className="font-bold">1. Introducción</h2>
            <p>
              En Banco Latino, respetamos su privacidad y nos comprometemos a
              proteger los datos personales que usted nos proporciona.
            </p>
          </section>

          <section>
            <h2 className="font-bold">2. Información que recopilamos</h2>
            <p>
              Recopilamos información personal como nombre, dirección, número de
              teléfono, correo electrónico y datos financieros cuando utiliza
              nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="font-bold">3. Uso de la información</h2>
            <p>
              Usamos su información para prestar y mejorar nuestros servicios,
              procesar transacciones, y enviarle notificaciones relacionadas con
              su cuenta.
            </p>
          </section>

          <section>
            <h2 className="font-bold">4. Compartir datos con terceros</h2>
            <p>
              No compartimos su información con terceros, salvo cuando sea
              necesario para cumplir con obligaciones legales o para prestar
              nuestros servicios bajo contrato con proveedores autorizados.
            </p>
          </section>

          <section>
            <h2 className="font-bold">5. Seguridad de los datos</h2>
            <p>
              Implementamos medidas técnicas y organizativas para proteger su
              información contra el acceso no autorizado, pérdida o alteración.
            </p>
          </section>

          <section>
            <h2 className="font-bold">6. Derechos del usuario</h2>
            <p>
              Usted tiene derecho a acceder, rectificar o eliminar su
              información personal. Puede ejercer estos derechos contactándonos
              directamente.
            </p>
          </section>

          <section>
            <h2 className="font-bold">7. Cambios a esta política</h2>
            <p>
              Podemos actualizar esta política de privacidad en cualquier
              momento. Notificaremos los cambios relevantes a través de nuestros
              canales oficiales.
            </p>
          </section>

          <section>
            <h2 className="font-bold">8. Contacto</h2>
            <p>
              Para consultas relacionadas con esta política, por favor
              escríbanos a través de nuestro formulario de contacto o visite
              nuestras agencias.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Privacidad;
