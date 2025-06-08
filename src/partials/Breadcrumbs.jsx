import React from "react";

const Breadcrumbs = ({ items }) => (
  <div
    className="breadcrumbs bg-white/80 backdrop-blur-md shadow-sm border border-gray-200 rounded-md px-4 py-2 flex items-center mt-12 z-10 w-full max-w-4xl mx-auto"
    aria-label="Breadcrumb"
  >
    <ul className="flex items-center space-x-2 w-full">
      <li>
        <a
          href="/"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="house"
            className="w-5 h-5 mr-1"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            ></path>
          </svg>
        </a>
      </li>
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            className="w-3 h-3 text-gray-400 mx-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            ></path>
          </svg>
          {item.href ? (
            <a href={item.href} className="text-blue-600 hover:text-blue-800">
              {item.label}
            </a>
          ) : (
            <span className="last_breadcrumb text-gray-500 font-semibold">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Breadcrumbs;
