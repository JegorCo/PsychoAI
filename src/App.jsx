import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function App() {
  const [vkLink, setVkLink] = useState('');
  const [error, setError] = useState('');
  const [personalityMetrics, setPersonalityMetrics] = useState({
    extraversion: 75,
    coordinates: { x: 75, y: 25 }
  });

  const handleSubmit = () => {
    if (!vkLink.trim()) {
      setError('Введено пустое поле');
    } else {
      setError('');
      // Handle submission logic here
    }
  };

  const radarData = {
    labels: ['Экстраверсия', 'Нейротизм', 'Доброжелательность', 'Добросовестность', 'Открытость опыту'],
    datasets: [
      {
        label: 'Личностные характеристики',
        data: [65, 75, 80, 70, 85],
        backgroundColor: 'rgba(147, 112, 219, 0.5)',
        borderColor: 'rgba(147, 112, 219, 1)',
        borderWidth: 1,
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          display: false
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.5)'
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.5)'
        },
        pointLabels: {
          color: 'white',
          font: {
            size: 14
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#33A9FF] text-white py-4">
        <nav className="max-w-7xl mx-auto px-4 flex items-center space-x-8">
          <div className="font-bold text-xl">AI Психолог</div>
          <a href="#" className="hover:opacity-80">Анкета</a>
          <a href="#" className="hover:opacity-80">Профиль</a>
          <a href="#" className="hover:opacity-80 underline">Поиск</a>
          <a href="#" className="hover:opacity-80">Метрики</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* VK Link Input Section */}
        <div className="bg-[#33A9FF] rounded-2xl p-8 mb-8">
          <h2 className="text-center text-white text-xl mb-4">Введите ссылку на страницу ВК</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full">
              <input
                type="text"
                value={vkLink}
                onChange={(e) => {
                  setVkLink(e.target.value);
                  setError('');
                }}
                placeholder="https://vk.com/jegor_ka"
                className="w-full p-3 rounded-lg bg-white text-[#827878] placeholder-[#827878] focus:outline-none"
              />
              {error && <div className="text-white mt-2">{error}</div>}
            </div>
            <button 
              onClick={handleSubmit}
              className="bg-[#000B76] text-white px-8 py-3 rounded-full text-lg hover:bg-opacity-90"
            >
              Составить описание
            </button>
          </div>
        </div>

        {/* Personality Pentagon Chart */}
        <div className="mb-8">
          <h3 className="text-black text-lg mb-4">Карточка по большой пятёрке</h3>
          <div className="bg-[#FFB5F5] rounded-2xl p-6">
            <div className="w-full max-w-md mx-auto">
              <Radar data={radarData} options={radarOptions} />
            </div>
          </div>
        </div>

        {/* Jung Model Description */}
        <div>
          <h3 className="text-black text-lg mb-4">▼ Описание по модели Юнга</h3>
          <div className="bg-[#7ED7A5] rounded-2xl p-6">
            {/* Extraversion Scale */}
            <div className="mb-12">
              <h4 className="text-white mb-2">Тип личности по интроверсии/экстраверсии:</h4>
              <div className="flex items-center gap-4">
                <div className="bg-gray-300 rounded-full h-8 flex-grow overflow-hidden">
                  <div 
                    className="bg-[#99CCFF] h-full rounded-l-full"
                    style={{ width: `${personalityMetrics.extraversion}%` }}
                  />
                </div>
                <div className="text-white whitespace-nowrap">
                  Экстраверт {personalityMetrics.extraversion}%
                </div>
              </div>
            </div>

            {/* Coordinate System */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Grid Container */}
              <div className="relative w-full aspect-square" style={{ maxWidth: '200px', margin: '2rem auto' }}>
                {/* Labels */}
                <div className="absolute text-white text-center" style={{ width: '100%', top: '-2rem' }}>
                  Интуиция
                </div>
                <div className="absolute text-white text-center" style={{ width: '100%', bottom: '-2rem' }}>
                  Восприятие
                </div>
                <div className="absolute text-white" style={{ left: '-4rem', top: '50%', transform: 'translateY(-50%)' }}>
                  Чувство
                </div>
                <div className="absolute text-white" style={{ right: '-5.5rem', top: '50%', transform: 'translateY(-50%)' }}>
                  Мышление
                </div>

                {/* Grid */}
                <div className="absolute inset-0 grid grid-cols-2 gap-1">
                  <div className="bg-[#FF9999]"></div>
                  <div className="bg-[#99CCFF]"></div>
                  <div className="bg-[#FFFF99]"></div>
                  <div className="bg-[#CC99FF]"></div>
                </div>
                
                {/* Coordinate Dot */}
                <div 
                  className="absolute w-3 h-3 bg-black rounded-full"
                  style={{ 
                    left: `${personalityMetrics.coordinates.x}%`,
                    top: `${personalityMetrics.coordinates.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;