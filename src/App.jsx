import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import PatientAnalysis from './pages/PatientAnalysis';
import AnalysisResult from './pages/AnalysisResult';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FEDCBA]">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient-analysis" element={<PatientAnalysis />} />
          <Route path="/analysis-result" element={<AnalysisResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;