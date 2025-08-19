import React from 'react';

const transactions = [
  { id: 1, date: '15/08/2025', description: 'Compra en Supermercado', amount: -55.75 },
  { id: 2, date: '14/08/2025', description: 'Retiro en Cajero Automático', amount: -100.00 },
  { id: 3, date: '12/08/2025', description: 'Suscripción Netflix', amount: -12.99 },
];

const CardHistory = () => {
  return (
    <div className="card-history-container">
      <h3>Últimas Transacciones</h3>
      <ul className="transaction-list">
        {transactions.map(tx => (
          <li key={tx.id} className="transaction-item">
            <span className="transaction-date">{tx.date}</span>
            <span className="transaction-description">{tx.description}</span>
            <span className={`transaction-amount ${tx.amount < 0 ? 'negative' : 'positive'}`}>
              {tx.amount.toFixed(2)} €
            </span>
          </li>
        ))}
      </ul>
      <p>Estado de cuenta mensual disponible en formato PDF.</p>
    </div>
  );
};

export default CardHistory;