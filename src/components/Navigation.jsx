import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-[#FFF5EE] py-4 px-8 flex items-center justify-between">
      <div className="flex items-center space-x-12">
        <Link to="/" className="text-black text-lg hover:opacity-80">Анкета</Link>
        <Link to="/patient-analysis" className="text-black text-lg hover:opacity-80">Анализ пациента</Link>
        <Link to="/analysis-result" className="text-black text-lg hover:opacity-80">Результат</Link>
        <Link to="/models" className="text-black text-lg hover:opacity-80">О моделях</Link>
      </div>
      <Link to="/" className="text-[#FF6B4A] text-2xl font-bold absolute left-1/2 transform -translate-x-1/2 hover:opacity-80">
        AI Психолог
      </Link>
      <button className="bg-[#FF6B4A] text-white px-8 py-2 rounded-full text-lg hover:bg-opacity-90">
        <img src="/profile.svg" alt="Profile" className="w-6 h-6" />
      </button>
    </nav>
  );
}

export default Navigation;