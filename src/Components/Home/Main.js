import React from 'react'
import {Container, Typography, Toolbar,IconButton, Button,Badge,Box, Item} from '@mui/material'
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { fontWeight } from '@mui/system';
import CoinDatah from './CoinData/CoinDatah'
import SecurityIcon from '@mui/icons-material/Security';
import TaskIcon from '@mui/icons-material/Task';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
const Main = () => {
  return (
 <>
  
 <div className="main" >


<Container size='xl' sx={{height:'40vh', borderRadius:'31px', display:'flex', justifyContent:'center',alignItems:'center', background:`url("http://165.232.142.159/api/static/images/bg/bg.jpg")`, backgroundSize:'cover' , backgroundPosition:'center' }} >

<Container size='lg' >


<Grid container spacing={2}>
  <Grid xs={4}>
  <Typography sx={{fontWeight:'500' ,  color:'white' ,fontSize:{xs:'22px', sm:'32px'}, width:{xs:'194px' , sm:"390px"} }}>Buy, trade, and hold 350+ cryptocurrencies on Krypt</Typography>
  </Grid>

   

  </Grid>

</Container>

</Container>

<Container size='xl' style={{display:'flex', flexWrap:"wrap" ,justifyContent:'center' , alignItems:'center', padding:'40px'}}>
   <Container size='sm'>


<Grid container Spacing={0} style={{fontFamily:'verdana'}}>
  <Grid xs={3}>
    <h2 style={{color:'#332B7A', fontSize:'28px' , marginBottom:'8px', fontWeight:'600'}}>$34 Million</h2>
    <p style={{color:'#657489'}}>24h trading volume on Krypt exchange
    </p>
  </Grid>
  <Grid xs={3}>
  <h2 style={{color:'#332B7A', fontSize:'28px' , marginBottom:'8px',fontWeight:'600'}}>25+</h2>
    <p style={{color:'#657489'}}>Cryptocurrencies listed

    </p>
  </Grid>
  <Grid xs={3}>
  <h2 style={{color:'#332B7A', fontSize:'28px' , marginBottom:'8px',fontWeight:'600'}}>5 million
</h2>
    <p style={{color:'#657489'}}>Registered users

    </p>
  </Grid>
  <Grid xs={3}>
  <h2 style={{color:'#332B7A', fontSize:'28px' , marginBottom:'8px',fontWeight:'600'}}>0.10%</h2>
    <p style={{color:'#657489'}}>Lowest transaction fees

    </p>
  </Grid>
</Grid>

   </Container>


   



</Container>


<Box sx={{padding:{xs:'50px',sm:'120px'}, backgroundColor:'#613195', display:'flex', justifyContent:'center',alignItems:'center' , color:'white'  }}>

<Container>

  <Box>
    <Typography sx={{fontSize:{xs:'20px',sm:'24px'}, fontWeight:500, fontStyle:'italic'}}>BCEX IS FOR EVERYONE</Typography>
    <Typography  sx={{fontSize:{xs:'16px',sm:'16px', color:'#ffffff8a'}}}>We’re building an exchange that will bring anyone who believes in crypto to join the digital cryptocurrency revolution. The world is moving on to this revolution at an unprecedented pace.
   Now is your time. With BCEX you can buy, sell & trade crytpocurrencies with amazing ease, confidence and trust. Whether you’re a first time investor or a professional trader - BCEX has got you both covered!</Typography>

  </Box>

</Container>
</Box>




<Container sx={{padding:{xs:'',sm:'120px'}, display:'flex', justifyContent:'center',alignItems:'center' ,flexWrap: 'wrap'   }} > 


<div style={{boxShadow:'1px 1px 11px -7px' ,fontFamily:'verdana', margin:'10px', padding:'20px' , borderRadius:'23px'}}>
  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , padding:'30px'}}><SecurityIcon  sx={{color:'#4E4E55' , height:'60px' , width:'60px'}} /></div>
    <div style={{display:'flex' ,flexDirection:'column', alignItems:'center' , padding:'5px'}}>

    <h2 style={{color:'#4E4E55', lineHeight:2}}>BEST IN CLASS SECURITY</h2>
    <p style={{textAlign:'center',color:'#4E4E55'}}>We've left no stone unturned to make BCEX India's most secure exchange. We're investing in regular security audits to ensure a highly secured trading platform for India.</p>
    </div>

</div>





<div style={{boxShadow:'1px 1px 11px -7px' ,fontFamily:'verdana', margin:'10px', padding:'20px' , borderRadius:'23px'}}>
  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , padding:'30px'}}><TaskIcon  sx={{color:'#4E4E55' , height:'60px' , width:'60px'}} /></div>
    <div style={{display:'flex' ,flexDirection:'column', alignItems:'center' , padding:'5px'}}>

    <h2 style={{color:'#4E4E55', lineHeight:2}}>BEST IN CLASS SECURITY</h2>
    <p style={{textAlign:'center',color:'#4E4E55'}}>We've left no stone unturned to make BCEX India's most secure exchange. We're investing in regular security audits to ensure a highly secured trading platform for India.</p>
    </div>

</div>







<div style={{boxShadow:'1px 1px 11px -7px' ,fontFamily:'verdana', margin:'10px', padding:'20px' , borderRadius:'23px'}}>
  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , padding:'30px'}}><ElectricBoltIcon  sx={{color:'#4E4E55' , height:'60px' , width:'60px'}} /></div>
    <div style={{display:'flex' ,flexDirection:'column', alignItems:'center' , padding:'5px'}}>

    <h2 style={{color:'#4E4E55', lineHeight:2}}>BEST IN CLASS SECURITY</h2>
    <p style={{textAlign:'center' , color:'#4E4E55'}}>We've left no stone unturned to make BCEX India's most secure exchange. We're investing in regular security audits to ensure a highly secured trading platform for India.</p>
    </div>

</div>






</Container>




<Box sx={{padding:{xs:'50px',sm:'120px'}, backgroundColor:'#2B3139', display:'flex', justifyContent:'center',alignItems:'center' , color:'white'  }}>

<Container>

  <Box>
    <Typography sx={{fontSize:{xs:'20px',sm:'24px'}, fontWeight:500, fontStyle:'italic'}}>BCEX IS FOR EVERYONE</Typography>
    <Typography  sx={{fontSize:{xs:'16px',sm:'16px', color:'#ffffff8a'}}}>We’re building an exchange that will bring anyone who believes in crypto to join the digital cryptocurrency revolution. The world is moving on to this revolution at an unprecedented pace.
   Now is your time. With BCEX you can buy, sell & trade crytpocurrencies with amazing ease, confidence and trust. Whether you’re a first time investor or a professional trader - BCEX has got you both covered!</Typography>

  </Box>

</Container>
</Box>





<Container style={{padding:'50px'}}>
<div style={{backgroundColor:'#F5F9FC' , borderRadius:'23px' , padding:'40px'}}>

<CoinDatah></CoinDatah>
</div>
</Container>

 </div>

  </> 
 
    )
}

export default Main