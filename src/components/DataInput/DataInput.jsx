import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
  Alert,
  Snackbar,
} from '@mui/material';
import ExcavationData from './ExcavationData';
import TransportationData from './TransportationData';
import EquipmentData from './EquipmentData';

// Custom theme for orange and green colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA500',
      light: '#FFD9B3',
    },
    success: {
      main: '#4CAF50',
    },
  },
});

const DataInput = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [excavationData, setExcavationData] = useState({
    excavationRate: '',
    excavationMethod: '',
  });
  const [transportationData, setTransportationData] = useState({
    transportDistance: '',
    transportMethod: '',
  });
  const [equipmentData, setEquipmentData] = useState({
    equipmentType: '',
    operatingHours: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setExcavationData({ excavationRate: '', excavationMethod: '' });
    setTransportationData({ transportDistance: '', transportMethod: '' });
    setEquipmentData({ equipmentType: '', operatingHours: '' });
  };

  const handleSubmit = () => {
    console.log('Form Data:', {
      excavationData,
      transportationData,
      equipmentData,
    });
    setShowSuccess(true);
  };

  const handleCloseSnackbar = () => {
    setShowSuccess(false);
  };

  const steps = [
    {
      label: 'Excavation Data',
      description: 'Enter excavation-related information',
      component: (
        <ExcavationData
          excavationData={excavationData}
          setExcavationData={setExcavationData}
        />
      ),
    },
    {
      label: 'Transportation Data',
      description: 'Enter transportation-related information',
      component: (
        <TransportationData
          transportationData={transportationData}
          setTransportationData={setTransportationData}
        />
      ),
    },
    {
      label: 'Equipment Data',
      description: 'Enter equipment-related information',
      component: (
        <EquipmentData
          equipmentData={equipmentData}
          setEquipmentData={setEquipmentData}
        />
      ),
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="p-6">
        <Typography variant="h5" component="h2" gutterBottom>
          Mining Operation Data Input
        </Typography>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography className="mb-4">{step.description}</Typography>
                {step.component}
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={
                        index === steps.length - 1 ? handleSubmit : handleNext
                      }
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Submit' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: '100%' }}
          >
            Data submitted successfully!
          </Alert>
        </Snackbar>
      </div>
    </ThemeProvider>
  );
};

export default DataInput;
