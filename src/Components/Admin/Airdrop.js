import React from 'react'
import './css/Airdrop.css'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Input, Button, IconButton } from '@mui/material';
const Airdrop = () => {
  return (
   
    <>
    <div style={{padding:'10px', color:'rgba(0, 0, 0, 0.34)',fontSize:'28px'}}>Airdrop</div>
    <div id="Airdrop">

     <form action="http://64.227.140.80/api/airdrop" method='POST' encType='multipart/form-data'>
    
      
      <IconButton color="primary" aria-label="upload picture" component="label">
  <input hidden name='airdrop' accept="image/*" type="file" />
  <PhotoCamera />
</IconButton>
<input type="submit" id='btn' />
      

    </form>
    </div>
    
    

    
    
    </>


  )
}

export default Airdrop