import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import React from 'react';
import Upload from './routes/Uplode';
import LoginPage from './routes/LoginPage';
import MainPortfolioPage from './routes/Portfolios';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/portfolio" element={<MainPortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
