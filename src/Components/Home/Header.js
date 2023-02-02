import React, { useState,useEffect } from 'react'
import {Container, Typography, Toolbar,IconButton, Button,Badge, Box} from '@mui/material'
import { Diversity1 } from '@mui/icons-material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LoginIcon from '@mui/icons-material/Login';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import axios from 'axios';
import {
  Link, Outlet 
} from "react-router-dom";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { fontWeight } from '@mui/system';
import UserHeader from '../Users/UserHeader';
const Header = () => {
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

const [isLoggedIn, setLogin] = useState(0);


useEffect(() => {
  axios.get('http://64.227.140.80/api/checklogin')
  .then(function (response) {
     
      setLogin(response.data.status);
      
      // if(isLoggedIn != 200 ){
      //     navilogout('/');
      // }
      

  })


})


  




    return (

<>
      {isLoggedIn?<UserHeader/> : 

<div>


{toggle?<Box id="toggle" sx={{height:'100vh' , width:'350px' , backgroundColor:"#F5F9FC" , position:'absolute' , marginTop:'0px' , left:0 , zIndex:2, boxShadow:'2px -1px 21px 0px #693297'  , transitionDelay:'1s'}}>


<Container style={{display:"flex", justifyContent:"space-between", padding:'20px'}}>  <Typography  style={{background: `linear-gradient(to right, #30CFD0 0%, #330867 100%)`, 
  '-webkit-background-clip': 'text',
  fontSize:'30px',
  fontWeight:700,
  '-webkit-text-fill-color': 'transparent'}}>BCEX</Typography>  <Button sx={{backgroundColor:'white',border:'1px solid' , color:'#1976D2',fontWeight:800 ,"&:hover":{backgroundColor:'#F5F9FC'} }} onClick={hidetoggle}> <KeyboardDoubleArrowLeftOutlinedIcon/></Button> </Container>

<Container>


<Box sx={{padding:'10px' , "&:hover":{backgroundColor : 'white'}}}>
<Link style={{textDecoration:'none', color:'#1976D2' , fontSize:'20px' ,padding:'10px' , fontWeight:200}} to='/'>Home</Link>
</Box>

<Box sx={{padding:'10px' , "&:hover":{backgroundColor : 'white'}}}>
<Link style={{textDecoration:'none', color:'#1976D2' , fontSize:'20px' ,padding:'10px'}} to='/trade'>Marketplace</Link>
</Box>


<Box sx={{padding:'10px' , "&:hover":{backgroundColor : 'white'}}}>
<Link style={{textDecoration:'none', color:'#1976D2' , fontSize:'20px' , padding:'10px'}} to='/trade'>Trade</Link>
</Box>

<Box sx={{padding:'10px' , "&:hover":{backgroundColor : 'white'}}}>
<Link style={{textDecoration:'none', color:'#1976D2' , fontSize:'20px' , padding:'10px'}} to='/'>NFT</Link>
</Box>

<Box sx={{padding:'10px' , "&:hover":{backgroundColor : 'white'}}}>
<Link style={{textDecoration:'none', color:'#1976D2' , fontSize:'20px', padding:'10px'}} to='/registration'>Apply For Listing</Link>
</Box>

<Box sx={{padding:'10px' , "&:hover":{backgroundColor : 'white'}}}>
<Link style={{textDecoration:'none', color:'#1976D2' , fontSize:'20px', padding:'10px'}} to='/login'>Login</Link>
</Box>

</Container>



</Box>:null}

{/* ===================================================================================== */}


<Container sx={{display:'flex', justifyContent:'center' }} >

  <Container  maxWidth="xl" style={{backgroundColor:'#0B0917' ,  
  // boxShadow:'2px -1px 21px 0px #693297' ,
   display:"flex" , alignItems:"center", position:'fixed', zIndex:'20'}}>

  
<Toolbar sx={{display:'flex', gap:'20px', width:'100%'}}>

<ToggleButton onClick={togglebtn} value="justify" key="justify" style={{border:'none' , padding:'2px', marginTop:'5px'}} sx={{display:{xs:'block', sm:'none'}}}>
      <FormatAlignJustifyIcon style={{color:'#331E73'}} />
    </ToggleButton>


<Typography  style={{
//  `linear-gradient(to right, #30CFD0 0%, #330867 100%)`

  // '-webkit-background-clip': 'text',
  color:'#5661FF',
  fontSize:'22px',
  fontWeight:700,
 
  // '-webkit-text-fill-color': 'transparent'
  }}>BCEX</Typography>

{/* <Container ></Container> */}

<Container  style={{alignItems:'center', justifyContent:'space-around' , flexBasis:'100%'}} sx={{display:{xs:'none', sm:'flex'}}}>


<Typography>
<Link style={{textDecoration:'none', color:'#ffffff' , fontSize:'16px' ,padding:'10px' , fontWeight:200}} to='/'>Home</Link>
</Typography>

<Typography>
<Link style={{textDecoration:'none', color:'#ffffff' , fontSize:'16px' ,padding:'10px'}} to='/trade'>Marketplace</Link>
</Typography>


<Typography >
<Link to='/trade' style={{textDecoration:'none'}}><IconButton sx={{color:'#ffffff' , fontSize:'16px' , padding:'10px'}}><MonetizationOnOutlinedIcon/>&nbsp;Trade</IconButton></Link>
</Typography>

<Typography>
<Link style={{textDecoration:'none', color:'#ffffff' , fontSize:'16px' , padding:'10px'}} to='/'>NFT</Link>
</Typography>

<Typography>
<Link style={{textDecoration:'none', color:'#ffffff' , fontSize:'16px', padding:'10px'}} to='/registration'> Apply For Listing</Link>
</Typography>

{/* <Typography >
<Link style={{textDecoration:'none', color:'#ffffff' , fontSize:'16px', padding:'10px'}} to='/login'>Login</Link>
</Typography> */}

</Container>

<Container style={{display:'flex',justifyContent:'end', color:'#ffffff',gap:'14px', alignItems:'center'}}>

<Link to='/registration' style={{textDecoration:'none'}}><IconButton sx={{color:'#ffffff' , fontSize:'16px' , padding:'10px'}}><LoginIcon/>&nbsp;Sign up</IconButton></Link>

  <IconButton><Link style={{textDecoration:'none', color:'#ffffff' ,backgroundColor:'#1976D2', fontSize:'16px', padding:'10px'}} to='/login'>Login</Link></IconButton>
    <IconButton sx={{ color:'#ffffff'}}><DarkModeOutlinedIcon sx={{ color:'#ffffff'}} /></IconButton>
    <IconButton sx={{ color:'#ffffff', fontSize:'16px'}}>INR</IconButton>
    
</Container>


</Toolbar>

</Container>

</Container>

</div>}

</>

    )


}


export default Header