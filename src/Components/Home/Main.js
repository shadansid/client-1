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
 <div style={{height:'10vh', backgroundColor:'#0B0917', 	fontFamily: "Poppins, sans-serif"}}></div>
 {/* <img src="http://localhost:8800/static/images/bg/bg.jpg"/> */}
 

<Box size='lg' sx={{height:'90vh', display:'flex', justifyContent:'center',alignItems:'center',background:`url("http://64.227.140.80/api/static/images/bg/bg2.jpg")`, backgroundSize:'cover' , backgroundPosition:'center' }} >

<Container size='lg' sx={{height:'90vh', display:'flex', flexDirection:'column', gap:'100px',width:'70%'}} >



  <Typography sx={{fontWeight:'700' ,  color:'white' ,fontSize:{xs:'22px', sm:'62px'} }}>
  Buy, trade, and hold <span style={{color:"#5661FF"}}>350+</span> cryptocurrencies on BCEX

  </Typography>


   <Box>
   <input  name="email" placeholder="Enter your Email" style={{padding:'15px',borderRadius:'7px',height:'70px', width:'400px' }} type="text" /> <Button variant="contained" sx={{zIndex:'0', height:'65px'}}>Subscribe</Button>
    
    <div style={{fontSize:'16px', color:'white', display:'flex', height:'8vh',alignItems:'center',paddingLeft:'10px'}}>Subscribe to Crypto Announcements</div>
   </Box>

   <Box>
    <Typography sx={{fontsize:'16px', color:'white'}}>
    Discover 2261 tokens, exchange 1000, and earn with 4 airdrops, 28 farms and other activities.
    </Typography>
   </Box>

  

</Container>

</Box>

<Container size='xl' style={{display:'flex', flexWrap:"wrap" ,justifyContent:'center' , alignItems:'center', padding:'40px'}}>
   <Container size='sm'>


<Grid container Spacing={0} style={{fontFamily:'verdana', height:'60vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
  <Grid xs={3}>
    <h2 style={{color:'#627EEA', fontSize:'35px' , marginBottom:'8px', fontWeight:'600'}}>$34 Million</h2>
    <p style={{color:'#657489',fontSize:'16px'}}>24h trading volume on Krypt exchange
    </p>
  </Grid>
  <Grid xs={3}>
  <h2 style={{color:'#627EEA', fontSize:'35px' , marginBottom:'8px',fontWeight:'600'}}>25+</h2>
    <p style={{color:'#657489',fontSize:'16px'}}>Cryptocurrencies listed

    </p>
  </Grid>
  <Grid xs={3}>
  <h2 style={{color:'#627EEA', fontSize:'35px' , marginBottom:'8px',fontWeight:'600'}}>5 million
</h2>
    <p style={{color:'#657489',fontSize:'16px'}}>Registered users

    </p>
  </Grid>
  <Grid xs={3}>
  <h2 style={{color:'#627EEA', fontSize:'35px' , marginBottom:'8px',fontWeight:'600'}}>0.10%</h2>
    <p style={{color:'#657489', fontSize:'16px'}}>Lowest transaction fees

    </p>
  </Grid>
</Grid>

   </Container>
   <div style={{height:'8vh',padding:'13px',border:'1px solid #d4d4d4',borderRadius:'9px', display:'flex',alignItems:'center', justifyContent:'center', margin:'30px', fontSize:'28px', color:'#657489' , width:'1280px'}}>Popular Tokens and Coins</div>

   <Container>
<CoinDatah></CoinDatah>

</Container>


   



</Container>


<Box sx={{padding:{xs:'50px',sm:'120px'}, backgroundColor:'#0B0917', display:'flex', justifyContent:'center',alignItems:'center' , color:'white'  }}>

<Container>

  <Box>
    <Typography sx={{fontSize:{xs:'20px',sm:'24px'}, fontWeight:500, fontStyle:'italic'}}>BCEX IS FOR EVERYONE</Typography>
    <Typography  sx={{fontSize:{xs:'16px',sm:'16px', color:'#ffffff8a'}}}>We’re building an exchange that will bring anyone who believes in crypto to join the digital cryptocurrency revolution. The world is moving on to this revolution at an unprecedented pace.
   Now is your time. With BCEX you can buy, sell & trade crytpocurrencies with amazing ease, confidence and trust. Whether you’re a first time investor or a professional trader - BCEX has got you both covered!</Typography>

  </Box>

</Container>
</Box>


<Box sx={{padding:{xs:'50px',sm:'120px'},margin:'50px', background:`url("http://64.227.140.80/api/static/images/bg/app.png")`, backgroundSize:'cover' , backgroundPosition:'center', display:'flex',height:'100vh', color:'white'  }}>

<div  style={{width:'50%'}}>
<div style={{color:'grey', fontSize:'35px', lineHeight:'1'}}>Install Mobile App and earn on the go with a million crypto pioneers</div>
<div style={{padding:'10px'}}/>
 <p style={{color:'grey', fontSize:'16px'}}>Never miss a new token with new launches, free Airdrops and price alerts.</p>

</div>

<div style={{width:'50%'}}>

</div>




</Box>




{/* <Container sx={{padding:{xs:'',sm:'120px'}, display:'flex', justifyContent:'center',alignItems:'center' ,flexWrap: 'wrap'   }} > 


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
 */}












 </div>

  </> 
 
    )
}

export default Main