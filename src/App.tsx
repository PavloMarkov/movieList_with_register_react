import React, { useCallback, useState } from 'react';
import './App.scss';
import { Carousel } from './components/Carousel';
import { Header } from './components/Header';
import { Login } from './components/Login';

export const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const openModal = useCallback(() => {
    setIsLogin(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsLogin(false);
  }, []);

  const loginUserName = useCallback((name) => {
    setUserName(name);
  },
  []);

  return (
    <div className="container">
      <Header
        openModal={openModal}
        userName={userName}
      />
      <Carousel />
      {isLogin && (
        <Login
          isLogin={isLogin}
          closeModal={closeModal}
          loginUserName={loginUserName}
        />
      )}
    </div>
  );
};
