import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import imageLogo from "../assets/img/logoBanco.png";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(""); 
	const [isLoading, setIsLoading] = useState(false); 
	const navigate = useNavigate(); 

	const handleLogin = async (e) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);

		const URL_API = import.meta.env.VITE_URL_API;
		try {
			const response = await fetch(`${URL_API}/auth/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username,
					password,
				}),
				credentials: "include", // Necesario para cookies si las usas
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || "Error en el inicio de sesión");
			}

			const data = await response.json();

			if (data.access) {
				navigate("/home");
			}
		} catch (err) {
			setError(err.message || "No se pudo conectar al servidor");
			console.error("Error de conexión:", err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
			{/* Lado izquierdo: branding e imágenes */}
			<div className="hidden md:flex flex-col justify-between w-1/2 bg-gradient-to-b from-blue-900 to-blue-700 p-8">
				<div className="text-white mt-12">
					<h2 className="text-xl font-bold mb-8">BANCO LATINO</h2>
					<h3 className="text-lg font-bold mb-4">Consejos de seguridad</h3>
					<ul className="space-y-2 text-sm">
						<li>
							Banco Latino no solicita tu usuario ni contraseña por enlaces de
							correos electrónicos, llamadas o mensajes.
						</li>
						<li>
							Actualiza periódicamente tu clave de correo electrónico con una
							complejidad adecuada.
						</li>
						<li>
							Cada ingreso a la Banca Virtual, el sistema envía un código de
							seguridad temporal a tu número de celular registrado.
						</li>
						<li>
							Verifica siempre que en tu navegador aparezca la dirección
							correcta:
							<span className="ms-2 underline">
								https://www.bancolatino.com
							</span>
						</li>
					</ul>
				</div>
			</div>

			{/* Lado derecho: formulario */}
			<div className="flex flex-1 flex-col justify-center items-center p-6">
				<header>
					<img src={imageLogo} alt="Banco Latino" className="h-12 mb-8" />
				</header>
				<div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
					<h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">
						Banca Virtual
					</h2>
					<p className="text-gray-600 text-center mb-8">
						Ingrese con usuario o cree uno por primera vez.
					</p>

					{/* Error message display */}
					{error && (
						<div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
							{error}
						</div>
					)}

					<form autoComplete="off" onSubmit={handleLogin} className="space-y-6">
						<div>
							<label
								htmlFor="username"
								className="block text-sm font-medium text-gray-700"
							>
								Correo Electrónico o Usuario
							</label>
							<input
								id="username"
								name="username"
								type="text"
								autoComplete="off"
								maxLength={20}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								placeholder="Ingresa tu usuario"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Contraseña
							</label>
							<input
								id="password"
								name="password"
								type={showPassword ? "text" : "password"}
								autoComplete="off"
								maxLength={14}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								placeholder="Ingresa tu contraseña"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<div className="mt-1 flex items-center">
								<input
									id="show-password"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
									checked={showPassword}
									onChange={() => setShowPassword(!showPassword)}
								/>
								<label
									htmlFor="show-password"
									className="ml-2 block text-sm text-gray-700"
								>
									Mostrar contraseña
								</label>
							</div>
						</div>
						<div className="flex flex-col space-y-3 mt-4">
							<button
								type="submit"
								className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 font-semibold w-full flex justify-center items-center"
								disabled={isLoading}
							>
								{isLoading ? (
									<>
										<svg
											className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Procesando...
									</>
								) : (
									"Iniciar sesión"
								)}
							</button>
							<button
								type="button"
								className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-500 font-semibold w-full"
								onClick={() => navigate("/registro")}
							>
								Crear Usuario
							</button>
							<div className="flex justify-between mt-2">
								<a href="#" className="text-blue-700 text-sm hover:underline">
									Olvidé mi usuario
								</a>
								<a href="#" className="text-blue-700 text-sm hover:underline">
									Olvidé mi contraseña
								</a>
							</div>
						</div>
					</form>
					<div className="mt-8 text-center">
						<a
							href="#"
							className="text-blue-700 font-bold text-sm hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							Centro de Ayuda
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
