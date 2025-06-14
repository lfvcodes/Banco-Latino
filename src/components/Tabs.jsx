import React, { useState } from "react";

const Tabs = ({ tabs, defaultIndex = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultIndex);

  return (
    <div>
      <div className="flex border-b mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`flex items-center px-4 py-2 text-lg font-semibold focus:outline-none transition-colors
              ${
                activeTab === idx
                  ? "border-b-4 border-blue-600 text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600"
              }
            `}
            onClick={() => setActiveTab(idx)}
            type="button"
          >
            {tab.icon && (
              <span
                className={`material-icons mr-2 ${
                  activeTab === idx ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {tab.icon}
              </span>
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab]?.content}</div>
    </div>
  );
};

export default Tabs;
