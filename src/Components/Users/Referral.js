import React from 'react'
import { Button } from '@mui/material'
const Referral = () => {
 
 
    return (
    
        <>
        <div style={{height:'50vh', display:'flex', justifyContent:'center', alignItems:'center', padding:'20px'}}>

        <div style={{height:'20vh', boxShadow:'1px 1px 1px -2px' ,display:'flex', width:'100%', justifyContent:'center', alignItems:'center' , padding:'20px' , backgroundColor:'white', flexDirection:'column', borderRadius:'6px' }}>

      
        <h1 style={{lineHeight:'3' ,backgroundColor:'white', padding:'20px', fontSize:'26px',color: "rgb(58, 58, 58)",fontFamily:'verdana',fontWeight:400, color:'#330867' ,background: `linear-gradient(to right, #30CFD0 0%, #330867 100%)`,
  '-webkit-background-clip': 'text',
  fontSize:'26px',
  fontWeight:600,
  marginBottom:'10px',
  '-webkit-text-fill-color': 'transparent'}}>Refer and Earn Up to Rs.350 !</h1>

    <a href=
"whatsapp://send?text=GFG Example for whatsapp sharing"
data-action="share/whatsapp/share"
target="_blank">
        
    </a>
             <Button variant="contained" sx={{backgroundColor:'#330867'}} >Share to whatsapp</Button>
        

        </div>

        </div>
        </>



  )
}

export default Referral