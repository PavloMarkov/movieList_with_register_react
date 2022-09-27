import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

type Props = {
  openModal: () => void;
  userName: string;
  signUpUser: () => void;
  trySignUp: boolean;
};

export const Header: React.FC<Props> = (props) => {
  const {
    openModal, userName, signUpUser, trySignUp,
  } = props;

  const [isClickedBrowsBtn, setIsClickedBrowsBtn] = useState(false);

  const hideBrowseBtn = () => {
    setIsClickedBrowsBtn(true);
  };

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
              {trySignUp ? 'RESUME SIGN UP' : 'SIGN UP'}
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
            {!isClickedBrowsBtn && (
              <Button
                sx={{ m: 2 }}
                variant="outlined"
                size="large"
                onClick={hideBrowseBtn}
              >
                BROWSE
              </Button>
            )}
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
