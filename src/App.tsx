import { Box } from '@mui/material';
import React, { useCallback, useState } from 'react';
import './App.scss';
import { Carousel } from './components/Carousel';
import { Header } from './components/Header';
import { ListOfShows } from './components/ListOfShows';
import { Login } from './components/Login';

export const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [userName, setUserName] = useState('');
  const openModal = useCallback(() => {
    setIsLogin(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsLogin(false);
    setIsSignUp(false);
  }, []);

  const loginUserName = useCallback((name) => {
    setUserName(name);
  },
  []);

  const signUpUser = useCallback(() => {
    setIsSignUp(true);
    setIsLogin(true);
  },
  []);

  return (
    <Box className="container">
      <Header
        openModal={openModal}
        userName={userName}
        signUpUser={signUpUser}
      />
      <Carousel />
      {isLogin && (
        <Login
          closeModal={closeModal}
          loginUserName={loginUserName}
          isSignUp={isSignUp}
        />
      )}
      <ListOfShows />
    </Box>
  );
};
