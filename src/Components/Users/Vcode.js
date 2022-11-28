import React from 'react';
import './css/Login.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Button,Checkbox , Divider } from '@mui/material';



export default function Vcode() {
 
 
 
const Login = ()=>{

let vcode = document.getElementById('xyzlemail').value; 



const codeData = {

  code:vcode
 
  }
 


fetch('/verifyuser', {
  method: 'POST',
  body:JSON.stringify(codeData),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));





}

// -----------------------------------------------handle Changes-------------------------------------------------------z




  return (
  
  
    <>
    <div className="Registration">
        
        
        
        
       
        <div className="regbox0">

      
           <div className="img">

               
              </div>

       <div className="regbox1">

           
          
         
           <div className="heading">Login</div>
          
           <div id="regbox">
                   
                     
               <div className="aligndiv">
               <TextField 
        id="xyzlemail" fullWidth placeholder='Email Address' margin='dense' 
        label="Email" size="small" 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlinedIcon style={{color:'#30CFD0'}} />
            </InputAdornment>
          ),type:"email"
        }}variant="outlined"/>
 </div>

               <Button sx={{m:1}} variant="outlined" onClick={Login} style={{backgroundColor:'#30CFD0', color:'white'}} endIcon={<KeyboardArrowRightOutlinedIcon />}>Login</Button>

           </div>
       </div>

   </div>  
<Divider></Divider>

</div>

    </>




  )
}
