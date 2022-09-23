import React, { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { images } from '../CONST/CONSTANTS';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Carousel: React.FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <main
      className="page"
    >
      <Box sx={{
        maxWidth: '1080px',
        flexGrow: 1,
        padding: '0 20px',
      }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((image, index) => (
            <div
              key={image.label}
              style={{
                position: 'relative',
              }}
            >
              {Math.abs(activeStep - index) <= 2
                ? (
                  <div>
                    <Box
                      component="img"
                      sx={{
                        height: '100%',
                        display: 'block',
                        overflow: 'hidden',
                        width: '100%',
                      }}
                      src={image.imgPath}
                      alt={image.label}
                    />
                    <Typography
                      variant="h5"
                      style={{
                        position: 'absolute',
                        textAlign: 'center',
                        top: '50%',
                        left: '50%',
                        color: '#fff',
                        fontWeight: 'bold',
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      {image.label}
                    </Typography>
                  </div>
                ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={(
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          )}
          backButton={(
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          )}
        />
      </Box>
    </main>
  );
};
