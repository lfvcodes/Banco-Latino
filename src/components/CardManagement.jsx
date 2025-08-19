import React, { useState } from 'react';

const CardManagement = () => {
  const [isBlocked, setIsBlocked] = useState(false);
  
  const handleToggleBlock = () => {
    setIsBlocked(!isBlocked);
    alert(`Tarjeta ${isBlocked ? 'desbloqueada' : 'bloqueada'} temporalmente.`);
  };

  return (
    <div className="card-management-container">
      <ul>
        <li>
          <label>
            <input 
              type="checkbox" 
              checked={isBlocked} 
              onChange={handleToggleBlock} 
            />
            Bloqueo temporal
          </label>
        </li>
        <li><button>Activar/desactivar tarjeta</button></li>
        <li><button>Solicitar nueva tarjeta</button></li>
        <li><button>Reportar pérdida o robo</button></li>
        <li><button>Ver estado de solicitud</button></li>
        <li><button>Configurar límites de gasto</button></li>
      </ul>
    </div>
  );
};

export default CardManagement;