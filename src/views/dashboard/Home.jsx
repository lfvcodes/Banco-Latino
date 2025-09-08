import React, { useEffect,useState } from "react";
import Navbar from "../../partials/dashboard/Navbar";
import CardButton from "../../components/CardButton";
import mainImage from "../../assets/img/banner_home2.png";
import BalanceBar from "../../partials/dashboard/BalanceBar";
import Footer from "../../partials/dashboard/Footer";

const Home = () => {

	const [userInfo, setUserInfo] = useState({});
	const URL_API = import.meta.env.VITE_URL_API;
	
	const getInitData = () => {
		
		fetch(`${URL_API}/home`, {
		method: "GET",
		credentials: "include",
	})
		.then((res) => {
		if (!res.ok) throw new Error("No autenticado");
		return res.json();
		})
		.then((data) => {
			setUserInfo(data);
		})
		.catch((err) => {
		console.error("Error al obtener datos del usuario:", err);
		});
	};
	
	useEffect(() => {
		getInitData();
	},[]);

	return (
		<>
			<Navbar user={userInfo.name}/>
			<section className="flex flex-col md:flex-row items-center justify-between bg-blue-50 py-10 pb-0 md:py-10 md:pb-2 px-4 md:px-16">
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

				<div className="flex-1 flex flex-col items-start md:pr-12 ">
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
			<BalanceBar balance={userInfo.saldo} />

			{/* Cards de acciones */}
			<section className="bg-gray-200 py-8 pb-16 md:px-2">
				<div className="w-full mx-auto px-16 grid md:grid-cols-5 gap-2 md:gap-8">
					<CardButton
						href="/home"
						title="Posición"
						iconName="wallet" // Icono para posición/locación
					/>
					<CardButton
						href="/movimientos/"
						title="Movimientos"
						iconName="swap_vert" // Icono para movimientos/transacciones
					/>
					<CardButton
						href="/Transferir/"
						title="Transferir"
						iconName="send" // Icono para transferencias
					/>
					<CardButton
						href="/dashboard/servicios/"
						title="Servicios"
						iconName="miscellaneous_services" // Icono para servicios
					/>
					<CardButton
						href="/tarjetas"
						title="Tarjetas"
						iconName="credit_card" // Icono para tarjetas
					/>
				</div>
			</section>
			<Footer className="bottom-0" />
		</>
	);
};

export default Home;
