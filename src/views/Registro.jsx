import React, { useState } from "react";
import Navbar from "../partials/Navbar";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";

// Componente principal del formulario de registro
const RegistroForm = () => {
	const [form, setForm] = useState({
		first_name: "",
		last_name: "",
		email: "",
		document_number: "",
		birth_date: "",
		phone_number: "",
		password: "",
		confirm_password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
		setError("");
	};

	const validate = () => {
		if (form.password !== form.confirm_password) {
			setError("Las contraseñas no coinciden.");
			return false;
		}
		return true;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!validate()) return;

		alert("Formulario enviado correctamente");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white/95 rounded-3xl shadow-lg p-8 mt-16 w-full max-w-lg flex flex-col gap-2 border border-gray-200"
			style={{ minWidth: 320 }}
		>
			<h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
				Registro de Usuario
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<InputField
					label="Cédula"
					type="text"
					id="document_number"
					iconName="badge"
					value={form.document_number}
					onChange={handleChange}
				/>
				<InputField
					label="#RIF"
					type="text"
					id="document_rif"
					iconName="badge"
					value={form.document_rif}
					onChange={handleChange}
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<InputField
					label="Nombres"
					type="text"
					id="first_name"
					iconName="person"
					value={form.first_name}
					onChange={handleChange}
				/>
				<InputField
					label="Apellidos"
					type="text"
					id="last_name"
					iconName="person"
					value={form.last_name}
					onChange={handleChange}
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<InputField
					label="Fecha Nacimiento"
					type="date"
					id="birth_date"
					iconName="calendar_today"
					value={form.birth_date}
					onChange={handleChange}
				/>
				<InputField
					label="Dirección"
					type="text"
					id="dir_location"
					iconName="location_on"
					placeholder="Calle, Ciudad, Estado"
					value={form.dir_location}
					onChange={handleChange}
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<InputField
					label="Correo Electrónico"
					type="email"
					id="email"
					iconName="mail"
					value={form.email}
					onChange={handleChange}
				/>
				<InputField
					label="Teléfono"
					type="text"
					id="phone_number"
					iconName="phone"
					value={form.phone_number}
					onChange={handleChange}
					placeholder="+"
				/>
			</div>
			<PasswordField
				label="Contraseña"
				id="password"
				iconName="vpn_key"
				value={form.password}
				onChange={handleChange}
				show={showPassword}
				toggleShow={() => setShowPassword((s) => !s)}
			/>
			<PasswordField
				label="Confirmar Contraseña"
				id="confirm_password"
				iconName="vpn_key"
				value={form.confirm_password}
				onChange={handleChange}
				show={showConfirm}
				toggleShow={() => setShowConfirm((s) => !s)}
			/>
			<div className="mb-3 p-2">
				<small className="text-primary fw-bold">
					✓ Debe contener entre 8 y 20 caracteres <br />
					✓ Debe contener al menos un número, una letra mayúscula, una minúscula
					y uno de estos caracteres especiales ! * # $ @
					<br />✓ No debe contener más de tres (3) caracteres iguales
					consecutivos numéricos o alfabéticos
				</small>
			</div>
			{error && (
				<div className="alert alert-danger py-2 text-center mb-3">{error}</div>
			)}
			<button
				type="submit"
				className="bg-blue-900 mt-2 text-white p-2 rounded-full w-full"
			>
				<span>Registrarse</span>
				<span className="material-icons align-end p-0 m-0 ms-2">login</span>
			</button>
		</form>
	);
};

const Registro = () => (
	<>
		<Navbar />
		<section className="flex flex-col items-center justify-center min-h-screen bg-blue-50 py-10 px-4">
			<RegistroForm />
		</section>
	</>
);

export default Registro;
