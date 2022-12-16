import React, { useState } from 'react'
import {Container, Typography, Toolbar,IconButton, Button,Badge, Box} from '@mui/material'
import { Diversity1 } from '@mui/icons-material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import {
  Link, Outlet 
} from "react-router-dom";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { fontWeight } from '@mui/system';
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



    return (

<>

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
<Link style={{textDecoration:'none', color:'#1976D2' , fontSize:'20px', padding:'10px'}} to='/registration'>Registration</Link>
</Box>

<Box sx={{padding:'10px' , "&:hover":{backgroundColor : 'white'}}}>
<Link style={{textDecoration:'none', color:'#1976D2' , fontSize:'20px', padding:'10px'}} to='/login'>Login</Link>
</Box>

</Container>



</Box>:null}


<Container sx={{display:'flex', justifyContent:'center' }} >

  <Container  maxWidth="xl" style={{backgroundColor:'#ffffff' ,  boxShadow:'2px -1px 21px 0px #693297' , display:"flex" , alignItems:"center", position:'fixed'}}>

  
<Toolbar>

<ToggleButton onClick={togglebtn} value="justify" key="justify" style={{border:'none' , padding:'2px', marginTop:'5px'}} sx={{display:{xs:'block', sm:'none'}}}>
      <FormatAlignJustifyIcon style={{color:'#331E73'}} />
    </ToggleButton>


<Typography  style={{background: `linear-gradient(to right, #30CFD0 0%, #330867 100%)`,
  '-webkit-background-clip': 'text',
  fontSize:'22px',
  fontWeight:700,
  '-webkit-text-fill-color': 'transparent'}}>BCEX</Typography>

<Container ></Container>

<Container  style={{alignItems:'center', justifyContent:'space-around' , flexGrow:'2'}} sx={{display:{xs:'none', sm:'flex'}}}>


<Typography>
<Link style={{textDecoration:'none', color:'#4E4E55' , fontSize:'16px' ,padding:'10px' , fontWeight:200}} to='/'>Home</Link>
</Typography>

<Typography>
<Link style={{textDecoration:'none', color:'#4E4E55' , fontSize:'16px' ,padding:'10px'}} to='/trade'>Marketplace</Link>
</Typography>


<Typography>
<Link style={{textDecoration:'none', color:'#4E4E55' , fontSize:'16px' , padding:'10px'}} to='/trade'>Trade</Link>
</Typography>

<Typography>
<Link style={{textDecoration:'none', color:'#4E4E55' , fontSize:'16px' , padding:'10px'}} to='/'>NFT</Link>
</Typography>

<Typography>
<Link style={{textDecoration:'none', color:'#4E4E55' , fontSize:'16px', padding:'10px'}} to='/registration'>Registration</Link>
</Typography>

<Typography >
<Link style={{textDecoration:'none', color:'#4E4E55' , fontSize:'16px', padding:'10px'}} to='/login'>Login</Link>
</Typography>

</Container>

<Container style={{display:'flex',justifyContent:'flex-end'}}>
    <IconButton><DarkModeOutlinedIcon/></IconButton>
</Container>


</Toolbar>

</Container>

</Container>


</>

    )


}


export default Header