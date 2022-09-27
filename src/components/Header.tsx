import { Button, Typography } from '@mui/material';
import React from 'react';

type Props = {
  openModal: () => void;
  userName: string;
  signUpUser: () => void;
};

export const Header: React.FC<Props> = (props) => {
  const { openModal, userName, signUpUser } = props;

  return (
    <nav
      className="navbar"
    >
      <div>
        {!userName && (
          <>
            <Button
              sx={{ m: 2 }}
              variant="contained"
              size="large"
              color="success"
              onClick={signUpUser}
            >
              SIGN UP
            </Button>
            <Button
              sx={{ m: 2 }}
              variant="contained"
              size="large"
              color="secondary"
              onClick={openModal}
            >
              SIGN IN
            </Button>
            <Button
              sx={{ m: 2 }}
              variant="outlined"
              size="large"
            >
              BROWSE
            </Button>
          </>
        )}
      </div>

      {userName && (
        <Typography
          variant="h6"
          component="h6"
          sx={{ m: 2 }}
        >
          {`Header welcome ${userName}!`}
        </Typography>
      )}
    </nav>
  );
};
