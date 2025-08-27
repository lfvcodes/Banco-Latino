import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/dashboard/Home";
import Principal from "./views/Principal";
import Registro from "./views/Registro";
import Nosotros from "./views/Nosotros";
import Login from "./views/Login";
import Empresas from "./views/Empresas";
import Personas from "./views/Personas";
import Servicios from "./views/Servicios";
import Terminos from "./views/Terminos";
import Privacidad from "./views/Privacidad";
import QuieroInvertir from "./views/QuieroInvertir";
import Movimientos from "./views/dashboard/Movimientos"
import Transferir from "./views/dashboard/Transferir";
import Tarjetas from "./views/dashboard/Tarjetas";
import Divisas from "./views/dashboard/Divisas";
import {Servicios as DashServicios} from "./views/dashboard/Servicios";
import PayServices from "./components/Servicios/PayServices";
import Cuentas from "./views/dashboard/Cuentas";
import Seguridad from "./views/dashboard/Seguridad";
import PagoMovil from "./views/dashboard/PagoMovil";


// Componente simple para 404
function NotFound() {
	const existSession = localStorage.getItem("token");
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
			<h1 className="text-5xl font-bold text-blue-900 mb-4">404</h1>
			<p className="text-xl text-blue-700 mb-6">Página no encontrada</p>
			{!existSession && (
				<a href="/" className="text-blue-900 underline hover:text-blue-700">
					Volver al inicio
				</a>
			)}

			{existSession && (
				<a href="/home" className="text-blue-900 underline hover:text-blue-700">
					Volver al inicio
				</a>
			)}
		</div>
	);
}

const root = createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<Routes>
			<Route index element={<Principal />} />
			<Route path="/" element={<Principal />} />
			<Route path="/Login" element={<Login />} />
			<Route path="/home" element={<Home />} />
			<Route path="/registro" element={<Registro />} />
			<Route path="/empresas" element={<Empresas />} />
			<Route path="/personas" element={<Personas />} />
			<Route path="/nosotros" element={<Nosotros />} />
			<Route path="/servicios" element={<Servicios />} />
			<Route path="/terminos" element={<Terminos />} />
			<Route path="/privacidad" element={<Privacidad />} />
			<Route path="/invertir" element={<QuieroInvertir />} />
			<Route path="/movimientos" element={<Movimientos />} />
			<Route path="/transferencias" element={<Transferir />} />
			<Route path="/transferir" element={<Transferir />} />
			<Route path="/tarjetas" element={<Tarjetas/>}/>
			<Route path="/divisas" element={<Divisas/>}/>
			<Route path="/dashboard/servicios" element={<DashServicios/>}/>
			<Route path="/dashboard/servicios/recarga" element={<PayServices title="Recarga Telefonica" />} />
			<Route path="/dashboard/servicios/energia" element={<PayServices title="Energía Eléctrica" />} />
			<Route path="/dashboard/servicios/agua" element={<PayServices title="Agua" />} />
			<Route path="/dashboard/servicios/internet" element={<PayServices title="Internet" />} />
			<Route path="/dashboard/servicios/tv" element={<PayServices title="TV Cable" />} />
			<Route path="/dashboard/servicios/gas" element={<PayServices title="Gas" />} />
			<Route path="/dashboard/cuentas" element={<Cuentas />} />
			<Route path="/seguridad" element={<Seguridad />} />
			<Route path="/pagomovil" element={<PagoMovil />} />
			

			{/* Ruta para manejar 404 */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);
