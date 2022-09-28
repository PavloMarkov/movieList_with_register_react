import {
  Box, Button, Modal, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';

type Props = {
  closeModal: () => void;
  loginUserName: (name: string) => void;
  isSignUp: boolean;
  isLogin: boolean;
  resumeSignUp: () => void;
};

export const Login: React.FC<Props> = (props) => {
  const {
    closeModal, loginUserName, isSignUp, isLogin, resumeSignUp,
  } = props;
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');

  const isCorrectEmail = /\S+@\S+\.\S+/.test(userEmail);
  // eslint-disable-next-line no-useless-escape
  const isCorrectPassword = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*])(?=.*[a-zA-Z]).{6,18}$/.test(userPassword);

  const canLogin = isCorrectEmail && isCorrectPassword;
  const canSignUp = canLogin && userName;

  if (canSignUp) {
    resumeSignUp();
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <section
      className="login"
    >
      <Modal
        open={isLogin}
        keepMounted
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {isSignUp ? 'Sign Up' : 'Login:'}
          </Typography>
          {isSignUp && (
            <TextField
              sx={{ margin: '10px', width: '90%' }}
              error={userName === ''}
              label="Name"
              type="text"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              placeholder="Name"
              helperText={userName !== '' ? 'Name is correct' : 'Enter your name'}
            />
          )}
          <TextField
            sx={{ margin: '10px', width: '90%' }}
            error={!isCorrectEmail}
            label="E-mail"
            type="email"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
            placeholder="E-mail"
            helperText={isCorrectEmail ? 'Email is correct' : 'Enter valid e-mail'}
          />
          <TextField
            sx={{ margin: '10px', width: '90%' }}
            error={!isCorrectPassword}
            label="Password"
            type="password"
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
            placeholder="Password"
            helperText="min 6 chars: min 1 big letter, 1 number, 1 special"
          />
          <Button
            variant="contained"
            disabled={isSignUp ? !canSignUp : !canLogin}
            type="button"
            size="large"
            color="success"
            sx={{ margin: '0 auto' }}
            onClick={() => {
              if (isSignUp) {
                loginUserName(userName);
              } else {
                loginUserName(userEmail);
              }

              closeModal();
            }}
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </Button>
        </Box>
      </Modal>
    </section>
  );
};
