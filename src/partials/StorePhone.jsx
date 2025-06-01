import React from "react";
import footerImage from "../assets/img/phoFooter.webp";

const StorePhone = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-8 pb-0">
      {/* Imagen del teléfono */}
      <div className="flex-shrink-0">
        <img
          className="max-h-48 md:max-h-56"
          src={footerImage}
          alt="Promoción App"
        />
      </div>
      {/* Tiendas y reputación */}
      <div className="flex flex-col items-center md:items-start gap-4">
        {/* Botones de descarga */}
        <div className="flex gap-2">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            title="Descargar en Google Play"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/180px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="h-10"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            title="Descargar en App Store"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </a>
        </div>
        {/* Reputación y descargas */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-blue-900">4.8</span>
          <span className="flex text-yellow-400 text-xl">
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star_half</span>
          </span>
          <span className="text-gray-600 text-sm">(+100,000 descargas)</span>
        </div>
      </div>
    </div>
  );
};

export default StorePhone;
