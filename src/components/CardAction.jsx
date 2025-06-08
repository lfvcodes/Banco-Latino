import React from "react";

const CardAction = ({ href, title, iconName, description, linkText }) => (
  <a
    href={href}
    title={title}
    className="flex flex-col bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition w-full md:w-70"
  >
    <div className="flex items-center mb-4">
      <span className="material-icons text-blue-900 mr-3 text-3xl">
        {iconName}
      </span>
      <h3 className="text-lg font-bold text-blue-900">{title}</h3>
    </div>
    <p className="text-gray-700 mb-2">{description}</p>
    <span className="flex items-center text-blue-700 font-semibold mt-auto">
      {linkText}
      <span className="material-icons ml-1 text-base">arrow_forward</span>
    </span>
  </a>
);

export default CardAction;
