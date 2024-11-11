import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import React from 'react';
import Upload from './routes/Uplode';
import LoginPage from './routes/LoginPage';
import MainPortfolioPage from './routes/Portfolios';
import SignupPage from './routes/SignupPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/portfolio" element={<MainPortfolioPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
