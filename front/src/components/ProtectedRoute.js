import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated()) {
    // 인증되지 않은 사용자는 로그인 페이지로 리다이렉트
    // 현재 시도한 경로를 state로 저장하여 로그인 후 돌아올 수 있게 함
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute; 