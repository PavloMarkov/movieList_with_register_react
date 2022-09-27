import React, { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
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
        maxWidth: {
          sm: '60%',
        },
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
            <Box
              key={image.label}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {Math.abs(activeStep - index) <= 2
                ? (
                  <Box
                    style={{
                      position: 'relative',
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: '100%',
                        display: 'block',
                        overflow: 'hidden',
                        maxWidth: '100%',
                      }}
                      src={image.imgPath}
                      alt={image.label}
                    />
                    <Box
                      component="div"
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        color: '#fff',
                        fontSize: {
                          sm: '16px',
                          md: '40px',
                        },
                        fontWeight: 'bold',
                        textAlign: 'center',
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      {image.label}
                    </Box>
                  </Box>
                ) : null}
            </Box>
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
