import React, { useState } from 'react';

function PatientAnalysis() {
  const [vkLink, setVkLink] = useState('');
  const [patients, setPatients] = useState([
    {
      name: 'ФИО пациента',
      vkLink: 'Ссылка на вк',
      lastRequest: 'Последний запрос',
    },
    {
      name: 'ФИО пациента',
      vkLink: 'Ссылка на вк',
      lastRequest: 'Последний запрос',
    },
    {
      name: 'ФИО пациента',
      vkLink: 'Ссылка на вк',
      lastRequest: 'Последний запрос',
    },
    {
      name: 'ФИО пациента',
      vkLink: 'Ссылка на вк',
      lastRequest: 'Последний запрос',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto px-8 py-12">
      <div className="bg-white rounded-[2rem] p-8">
        <h2 className="text-xl font-bold mb-4">Новый запрос:</h2>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="bg-[#FFF5EE] rounded-full flex items-center p-2">
            <input
              type="text"
              value={vkLink}
              onChange={(e) => setVkLink(e.target.value)}
              placeholder="Ввести ссылку"
              className="flex-grow bg-transparent px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#FF6B4A] text-white px-6 py-2 rounded-full hover:bg-opacity-90"
            >
              →
            </button>
          </div>
        </form>

        <h2 className="text-xl font-bold mb-4">История:</h2>
        <div className="space-y-4">
          {patients.map((patient, index) => (
            <div
              key={index}
              className="bg-[#FFF5EE] rounded-[1rem] p-4 flex justify-between items-center"
            >
              <div>
                <div className="text-[#FF6B4A]">{patient.name}</div>
                <div className="text-[#FF6B4A]">{patient.vkLink}</div>
                <div className="text-[#FF6B4A]">{patient.lastRequest}</div>
              </div>
              <button className="text-[#FF6B4A] transform rotate-180">▼</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PatientAnalysis;