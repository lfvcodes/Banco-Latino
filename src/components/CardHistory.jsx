import React from 'react';

const CardHistory = ({movements}) => {
  return (
    <div className="card-history-container">
      <h3>Últimas Transacciones</h3>
      <ul className="transaction-list">
        {movements.map(tx => (
          <li key={tx.id} className="transaction-item">
            <span className="transaction-date">{tx.date}</span>
            <span className="transaction-description">{tx.description}</span>
            <span className={`transaction-amount ${tx.amount < 0 ? 'negative' : 'positive'}`}>
              {tx.amount.toFixed(2)} $
            </span>
          </li>
        ))}
      </ul>
      <p>Estado de cuenta mensual disponible en formato PDF.</p>
    </div>
  );
};

export default CardHistory;