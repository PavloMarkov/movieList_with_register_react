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
  const [trySignUp, setTrySignUp] = useState(false);
  const [userName, setUserName] = useState('');
  const [isBrowse, setIsBrowse] = useState(true);

  const openModal = useCallback(() => {
    setIsLogin(true);
    setIsSignUp(false);
  }, []);
  const closeModal = useCallback(() => {
    setIsLogin(false);
  }, []);

  const loginUserName = useCallback((name) => {
    setUserName(name);
    setIsBrowse(false);
  },
  []);

  const signUpUser = useCallback(() => {
    setIsSignUp(true);
    setIsLogin(true);
  },
  []);

  const resumeSignUp = () => {
    setTrySignUp(true);
  };

  return (
    <Box className="container">
      <Header
        openModal={openModal}
        userName={userName}
        signUpUser={signUpUser}
        trySignUp={trySignUp}
      />
      <Carousel />
      <Login
        closeModal={closeModal}
        loginUserName={loginUserName}
        isSignUp={isSignUp}
        isLogin={isLogin}
        resumeSignUp={resumeSignUp}
      />
      <ListOfShows isBrowse={isBrowse} />
    </Box>
  );
};
