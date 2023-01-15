import React from 'react';
import UploadID from './UploadID';
import {Container, Typography, Toolbar,IconButton, Button,Badge,
    Box, Step, Stepper, StepLabel,StepButton
} from '@mui/material'

const steps = [
    'Complete your Profile',
    'Upload ID',
    'Submit for Verification',
  ];

const UserKyc = () => {
    
 
 
    return (
 
  <>
  
  <Container style={{marginTop:'30px' , padding:'40px'}}>

  <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>

<UploadID></UploadID>

  </Container>
  
  
  </>
 
 
 
    )
}

export default UserKyc