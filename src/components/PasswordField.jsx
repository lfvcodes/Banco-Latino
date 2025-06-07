import React from "react";

const PasswordField = ({
	label,
	id,
	iconName,
	value,
	onChange,
	show,
	toggleShow,
	required = true,
}) => (
	<div className="w-full mb-4">
		<label
			htmlFor={id}
			className="form-label fw-bold text-primary flex items-center mb-1"
		>
			<span className="material-icons me-2 text-blue-900">{iconName}</span>
			{label}
		</label>
		<div className="input-group bg-white rounded-8">
			<input
				required={required}
				type={show ? "text" : "password"}
				id={id}
				className="form-control text-primary border-0 rounded-full px-4 py-2 bg-gray-100 border border-gray-300 focus:bg-white focus:border-blue-400 transition"
				value={value}
				onChange={onChange}
			/>
			<span
				className="input-group-addon bg-none border-0 cursor-pointer d-flex align-items-center px-2"
				onClick={toggleShow}
				style={{ userSelect: "none" }}
			>
				<span className="material-icons">
					{show ? "visibility_off" : "visibility"}
				</span>
			</span>
		</div>
	</div>
);

export default PasswordField;
