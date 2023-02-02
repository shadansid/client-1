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
  <Container sx={{color:'white', fontSize:'20px', paddingTop:'30px'}}>Complete Your KYC </Container>
  
  <Container style={{marginTop:'30px' , padding:'40px' , border:'1px solid grey'}}>

  {/* <Box sx={{ width: '100%', color:'white' }}>
      <Stepper sx={{color:'white'}} activeStep={2} alternativeLabel>
        {steps.map((label) => (
          <Step sx={{color:'white'}} key={label}>
            <StepLabel sx={{color:'white'}}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box> */}

<UploadID></UploadID>

  </Container>
  
  
  </>
 
 
 
    )
}

export default UserKyc