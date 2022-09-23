import { Button, Typography } from '@mui/material';
import React from 'react';

type Props = {
  openModal: () => void;
  userName: string;
};

export const Header: React.FC<Props> = (props) => {
  const { openModal, userName } = props;

  return (
    <nav
      className="navbar"
    >
      <div>
        <Button
          sx={{ m: 2 }}
          variant="contained"
          size="large"
          color="success"
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
      </div>

      {userName && (
        <Typography
          variant="h6"
          component="h6"
          sx={{ m: 2 }}
        >
          Header welcome
          { userName}
          !
        </Typography>
      )}
    </nav>
  );
};
