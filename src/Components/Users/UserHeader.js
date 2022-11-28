import React from 'react'
import {Container, Typography, Toolbar,IconButton, Button,Badge,Box} from '@mui/material'
import {} from '@mui/icons-material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
const UserHeader = () => {

    return (

<>


<Container maxWidth="xl" style={{backgroundColor:'#171B26'}}>

  <Container maxWidth="xl">

  
<Toolbar>

{/* <Typography style={{background: `linear-gradient(to right, #30CFD0 0%, #330867 100%)`,
  '-webkit-background-clip': 'text',
  fontSize:'24px',
  fontWeight:600,
  '-webkit-text-fill-color': 'transparent'}}>
Krypto
</Typography> */}

<Typography  style={{background: `linear-gradient(to right, #30CFD0 0%, #1F3F97 100%)`,
  '-webkit-background-clip': 'text',
  fontSize:'22px',
  fontWeight:700,
  '-webkit-text-fill-color': 'transparent'}} >BCEX</Typography>

<Container ></Container>



<Container style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>










</Container>

<Container style={{display:'flex',justifyContent:'flex-end', color:'white'}}>
    <Button style={{color:'white'}}>English |</Button>
    <IconButton><DarkModeOutlinedIcon style={{color:'white'}} /></IconButton>
</Container>


</Toolbar>

</Container>

</Container>


</>

    )


}


export default UserHeader