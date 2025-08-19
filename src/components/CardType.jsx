import React from 'react';

const cardTypes = [
  {
    type: 'Débito',
    description: 'Acceso directo a fondos en cuenta.',
    idealFor: 'Uso diario, retiros.',
    icon: '💰',
  },
  {
    type: 'Crédito',
    description: 'Línea de crédito con pagos mensuales.',
    idealFor: 'Compras grandes, acumulación de puntos.',
    icon: '💳',
  },
  {
    type: 'Prepago',
    description: 'Recargable, sin vinculación a cuenta.',
    idealFor: 'Regalos, control de gastos.',
    icon: '🎁',
  },
];

const CardType = () => {
  return (
    <div className="card-type-container">
      {cardTypes.map((card, index) => (
        <div key={index} className="card-item">
          <div className="card-icon">{card.icon}</div>
          <div className="card-content">
            <h3 className="card-title">{card.type}</h3>
            <p className="card-description">{card.description}</p>
            <p className="card-idealfor">Ideal para: {card.idealFor}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardType;