import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [vkLink, setVkLink] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/patient-analysis');
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="bg-white rounded-[2rem] p-12 flex items-center justify-between gap-12">
        <div className="max-w-xl">
          <h1 className="text-[2.5rem] leading-tight font-bold mb-6 text-[#FF6B4A]">
            Исследуйте пациента<br />
            с помощью искусственного<br />
            интеллекта
          </h1>
          <p className="text-[#0097B2] text-lg mb-8 leading-relaxed">
            Ваши клиенты делятся эмоциями в соцсетях, а мы помогаем вам понять их глубже и точнее: наша уникальная ML-модель анализирует публикации, реакции и поведение пользователей в социальных сетях, формируя развернутый психологический портрет.
          </p>
          <button
            onClick={handleSubmit}
            className="w-full bg-[#FF6B4A] text-white py-4 rounded-full hover:bg-opacity-90 flex items-center justify-center text-lg font-medium"
          >
            Ввести ссылку
            <svg className="ml-2 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {error && <div className="text-red-500 mt-2 text-center">{error}</div>}
        </div>
        <div className="w-[40%]">
          <img
            src="https://i.imgur.com/XkYd1gP.png"
            alt="AI Psychology"
            className="w-full h-auto rounded-[2rem]"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-12">
        {[1, 2, 3].map((index) => (
          <div key={index} className="bg-[#FEDCBA] rounded-[2rem] overflow-hidden p-4">
            <div className="bg-gray-200 aspect-square rounded-[1.5rem] flex items-center justify-center mb-4">
              <span className="text-xl font-bold">Модель</span>
            </div>
            <div className="bg-[#009999] text-white rounded-[1.5rem] p-6 flex items-center justify-center">
              <span className="text-xl font-bold">Описание</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex gap-8">
        <div className="w-1/3 bg-gray-200 rounded-[2rem] aspect-square flex items-center justify-center">
          <span className="text-xl font-bold">График</span>
        </div>
        <div className="w-2/3 flex items-center justify-center text-center text-xl font-bold">
          Текст про зависимость качества модели от<br />
          количества пройденных анкет.
        </div>
      </div>
    </div>
  );
}

export default Home;