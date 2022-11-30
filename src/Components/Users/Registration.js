import React, { useState } from 'react';
import './css/Registration.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Button,Checkbox,Backdrop, Typography } from '@mui/material';
import TermsConditions from './TermsConditions'
import Vcode from './Vcode'
import { useNavigate } from 'react-router-dom';


export default function Registration() {
 
const [registered , setregister] = useState({})

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };


const navi =  useNavigate() 

const redirect =()=>{

  navi('/vcode')
}

if(registered.status === 200){

  redirect();

  

}


const register = ()=>{

let email = document.getElementById('xyzemail').value; 
let name = document.getElementById('xyzname').value; 
let pass = document.getElementById('xyzpass').value; 


const formdata = {

  name:name,
  email:email,
  password:pass,
  

}
 


fetch('http://165.232.142.159/api/adduser', {
  method: 'POST',
  body:JSON.stringify(formdata),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) =>{  setregister(json) 
    // sessionStorage.setItem("accessToken",json.accesstoken) 
 
  });





}

// -----------------------------------------------handle Changes-------------------------------------------------------
const handleChangeEmail = (e) =>{

 
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(e.target.value.match(mailformat))
{
console.log("Valid email address!");

}
else
{
console.log("You have entered an invalid email address!");

}









}


const handleChangeName = (e) =>{


console.log(e)
}

const handleChangePass = (e) =>{

  var PassExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if(e.target.value.match(PassExpression)){
      console.log("Strong pass")

  }else{
    console.log("weak pass")
  }



}

  return (
  
  
    <>
    <div className="Registration" style={{ 
      backgroundImage: `url("C:/Users/Danish Khan/Documents/Krypt/client/public/bg/1.jpg")` 
    }}>
        
        
        
        
       
        <div className="regbox0">

      
           <div className="img">

               
              </div>

       <div className="regbox1">

           
          
         
           <div className="heading">Registration</div>
          
           <div id="regbox">
                   
                 

            
               
               <div className="aligndiv">
               <TextField onChange={handleChangeEmail}
        id="xyzemail" fullWidth placeholder='Email Address' margin='dense' 
        label="Email" size="small" 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlinedIcon style={{color:'#30CFD0'}} />
            </InputAdornment>
          ),type:"email"
        }}variant="outlined"/>
 </div>

 <div className="aligndiv">
<TextField onChange={handleChangeName}
        id="xyzname" placeholder='Full Name'
        label="Full Name" size="small" fullWidth  margin='dense' 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonOutlineOutlinedIcon style={{color:'#30CFD0'}} />
            </InputAdornment>
          ),
        }}variant="outlined"/>
</div>

<div className="aligndiv">
<TextField placeholder='Password' onChange={handleChangePass}
        id="xyzpass" fullWidth
        label="Password" size="small"
        margin='dense'
        
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOpenOutlinedIcon style={{color:'#30CFD0'}}/>
            </InputAdornment>
          ), type:"password"
        }}variant="outlined"/>
</div>


               <div className="checkbox">

                  
            
               <Checkbox size="small" style={{ color:'#30CFD0'}} /> <p style={{cursor:'pointer'}} onClick={handleToggle}>Accept the Terms and Conditions</p> </div>



               <Backdrop
  sx={{ color: '#000000' ,backgroundColor:'#ffffff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  onClick={handleClose}
>
  <TermsConditions></TermsConditions>
</Backdrop>


               <Button variant="outlined" onClick={register} style={{backgroundColor:'#30CFD0', color:'white'}} endIcon={<KeyboardArrowRightOutlinedIcon />}>Register</Button>

               {registered? <p  style={{ color:'#30CFD0', textAlign:'center', marginTop:'7px'}}>{registered.msg}</p>:<div></div>}
            

           </div>
       </div>

   </div>  


</div>

    </>




  )
}
