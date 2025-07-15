import React from "react";

const BalanceBar = ({ balance }) => {
  return (
    <div className="w-full bg-gray-200 py-8 mx-auto grid md:grid-cols-1 gap-2">
      <a
        href={"/dashboard/home"}
        title="Balance"
        className="flex grid md:grid-cols-2 bg-green-200 rounded-lg shadow-md mx-16 p-4 px-16 hover:shadow-lg transition"
      >
        <div className="flex flex-col mx-auto w-full mb-2">
          <h2 className="text-3xl font-bold text-blue-900">
            <span className="material-icons text-blue-900 mr-2">
              account_balance_wallet
            </span>
            Depositos
          </h2>
        </div>
        <div className="flex flex-col items-end mx-auto w-full mb-2">
          <h2 className="text-3xl font-bold text-blue-900">${balance}</h2>
          <h3 className="text-xl font-bold text-blue-900">Total</h3>
        </div>
      </a>
    </div>
  );
};

export default BalanceBar;
