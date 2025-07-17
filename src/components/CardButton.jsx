import React from "react";

const CardButton = ({ href, title, iconName }) => (
	<a
		href={href}
		title={title}
		className="flex flex-col bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition w-full md:w-55"
	>
		<div className="flex items-center mb-2">
			<span className="material-icons text-blue-900 mr-2 text-3xl">
				{iconName}
			</span>
			<h2 className="text-lg font-bold text-blue-900">{title}</h2>
		</div>
	</a>
);

export default CardButton;
