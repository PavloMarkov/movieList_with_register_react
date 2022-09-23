import {
  Box, Button, Modal, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';

type Props = {
  isLogin: boolean;
  closeModal: () => void;
  loginUserName: (name: string) => void;
};

export const Login: React.FC<Props> = (props) => {
  const { isLogin, closeModal, loginUserName } = props;
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const isCorrectEmail = /\S+@\S+\.\S+/.test(userEmail);
  // eslint-disable-next-line no-useless-escape
  const isCorrectPassword = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*])(?=.*[a-zA-Z]).{6}$/.test(userPassword);

  const canLogin = isCorrectEmail && isCorrectPassword;

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
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login:
          </Typography>
          <TextField
            sx={{ margin: '10px', width: '90%' }}
            error={!isCorrectEmail}
            id="outlined-error-helper-text"
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
            id="outlined-error-helper-text"
            label="Password"
            type="password"
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
            placeholder="Password"
            helperText="6 chars: min 1 big letter, 1 number, 1 special"
          />
          <Button
            variant="contained"
            disabled={!canLogin}
            type="button"
            size="large"
            color="success"
            sx={{ margin: '0 autu' }}
            onClick={() => {
              loginUserName(userEmail);
              setUserEmail('');
              setUserPassword('');
              closeModal();
            }}
          >
            Login
          </Button>
        </Box>
      </Modal>
    </section>
  );
};
