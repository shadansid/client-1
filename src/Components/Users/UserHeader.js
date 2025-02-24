import React,{useState} from 'react'
import {Container, Typography, Toolbar,IconButton, Button,Badge,Box} from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {} from '@mui/icons-material';
import {
  Link, Outlet 
} from "react-router-dom";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ToggleButton from '@mui/material/ToggleButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
const UserHeader = () => {
  const [toggle, settoggle] = useState(false);

  const togglebtn = ()=>{
  
  if(toggle){
    settoggle(false)
  }else{
  
    settoggle(true)
  }
  
  }
  
  
  
  const hidetoggle = () =>{
  
    settoggle(false);
  
  
  }



    return (

<>

{/* <Container sx={{height:'14px'}}></Container> */}
<Container maxWidth="xl" style={{backgroundColor:'#171B26' , zIndex:'5',position:'fixed', borderBottom:'1px solid #2A2F3F'}} >
  

  <Container maxWidth="xl" style={{}}>

  
<Toolbar>

{/* <Typography style={{background: `linear-gradient(to right, #30CFD0 0%, #330867 100%)`,
  '-webkit-background-clip': 'text',
  fontSize:'24px',
  fontWeight:600,
  '-webkit-text-fill-color': 'transparent'}}>
Krypto
</Typography> */}
<ToggleButton onClick={togglebtn} value="justify" key="justify" style={{border:'none' , padding:'2px', marginTop:'5px'}} sx={{display:{xs:'block', sm:'none'}}}>
      <FormatAlignJustifyIcon style={{color:'#2EC2CB'}} />
    </ToggleButton>
<Typography  style={{color: "#5661FF",
  
  fontSize:'22px',
  fontWeight:700,
  }} >BCEX</Typography>

{/* <Container ></Container> */}



<Container sx={{display:{xs:'none',sm:'flex'}, alignItems:'center'}}>
<Box>

<Link to='/userpanel/userdashboard' style={{textDecoration:'none'}}><IconButton sx={{color:'#7D8794' , fontSize:'16px' , padding:'10px'}}>Dashboard</IconButton></Link>
</Box>

<Box>

<Link to='/trade' style={{textDecoration:'none'}}><IconButton sx={{color:'#7D8794' , fontSize:'16px' , padding:'10px'}}>Trade</IconButton></Link>
</Box>

<Box>

<Link to='/userpanel/wallet' style={{textDecoration:'none'}}><IconButton sx={{color:'#7D8794' , fontSize:'16px' , padding:'10px'}}>Deposit</IconButton></Link>
</Box>
<Box>

<Link to='/reqcall' style={{textDecoration:'none'}}><IconButton sx={{color:'#7D8794' , fontSize:'16px' , padding:'10px'}}>Apply For Listing</IconButton></Link>
</Box>
<Box>

<Link to='' style={{textDecoration:'none'}}><IconButton sx={{color:'#7D8794' , fontSize:'16px' , padding:'10px'}}>Company</IconButton></Link>
</Box>





</Container>

<Container style={{display:'flex',justifyContent:'flex-end', color:'#7D8794'}}>
    

<Link to='' style={{textDecoration:'none'}}><IconButton sx={{color:'#7D8794' ,display:{xs:'none'}, fontSize:'16px' , padding:'10px'}}>Wallet &nbsp;<KeyboardArrowDownOutlinedIcon sx={{color:'#7D8794'}} /></IconButton></Link>
<Link to='' style={{textDecoration:'none'}}><IconButton sx={{color:'#7D8794' , fontSize:'16px' , padding:'10px'}}> &nbsp;<NotificationsNoneOutlinedIcon sx={{color:'#7D8794'}} /></IconButton></Link>
    <Link to='/userpanel/userkyc' style={{textDecoration:'none'}}><IconButton sx={{color:'#7D8794' , fontSize:'16px' , padding:'10px'}}><AccountCircleOutlinedIcon sx={{color:'#7D8794'}} /></IconButton></Link>

    <Button style={{color:'#7D8794'}}>INR </Button>
    <IconButton><DarkModeOutlinedIcon style={{color:'#7D8794'}} /></IconButton>

</Container>


</Toolbar>


</Container>

</Container>


</>

    )


}


export default UserHeader