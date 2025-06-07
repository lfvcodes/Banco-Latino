import React from "react";

const InputField = ({
	label,
	type,
	id,
	iconName,
	value,
	onChange,
	required = true,
	placeholder = "",
	...props
}) => (
	<div className="w-full mb-4">
		<label
			htmlFor={id}
			className="form-label fw-bold text-primary flex items-center mb-1"
		>
			{iconName && (
				<span className="material-icons me-2 text-blue-900">{iconName}</span>
			)}
			{label}
		</label>
		<input
			required={required}
			type={type}
			className="form-control text-primary rounded-full px-4 py-2 bg-gray-100 border border-gray-300 focus:bg-white focus:border-blue-400 transition"
			id={id}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			{...props}
		/>
	</div>
);

export default InputField;
