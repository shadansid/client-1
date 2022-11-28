import React from 'react';
import './Css/buycoin.css'
import axios from 'axios'
import { TextField , InputAdornment} from '@mui/material';
import {Container, Typography, Toolbar,IconButton, Button,Badge,Grid,Divider, Box, Slider} from '@mui/material'

function BuyCoin({coins,coinChange}) {
  



 const buy = ()=>{
  
let buyamount = parseInt(document.getElementById('buyamount').value) 
console.log(buyamount)

let postData = {
  amount: buyamount,
  symbol: 'ethusdt'
};

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "accessToken": sessionStorage.getItem('accessToken'),
  }
};



axios.post('/pay', postData, axiosConfig)
.then((res) => {
  console.log("RESPONSE RECEIVED: ", res);
})
.catch((err) => {
  console.log("AXIOS ERROR: ", err);
})



 } 
  

 const sell = ()=>{

  let sellamount = document.getElementById('sellamount').value ;
console.log(sellamount)


fetch("/sellcoin", {
  method: "POST",

  body: JSON.stringify({
      amount: sellamount,
      symbol: "ethusdt"
  }),
   
  // Adding headers to the request
  headers: {
      "Content-type": "application/json; charset=UTF-8",
      accessToken: sessionStorage.getItem('accessToken')
  }
})

.then(response => response.json())


.then(json => console.log(json));




} 
  
  
  
  
  return (
   
  <>
   <div className="coin" style={{backgroundColor:'#171B26'}}>

<Container sx={{display:'flex' , justifyContent:'space-around' , alignItems:'center' , padding:'80px' }}>

<Container>
<div>  
<div style={{display:'flex', flexDirection:'column' ,padding:'50px', justifyContent:'center', alignItems:'center' , boxShadow:'1px 1px 18px -17px' , borderRadius:'23px' , backgroundColor:'white'}}>
<TextField inputProps={{ inputMode: 'numeric' }}
          label="Amount"
          id="buyamount"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      <Slider
  aria-label="Temperature"
  defaultValue={30}
  getAriaValueText={""}
  valueLabelDisplay="auto"
  step={25}
  marks
  min={0}
  max={100}
  sx={{width:'180px'}}
/>

<div>

<Button onClick={buy} sx={{width:'180px'}} variant="contained">Buy</Button>
</div>
        
        </div>
</div>
</Container>

<Container>

<div style={{display:'flex', flexDirection:'column' ,padding:'50px' ,justifyContent:'center', alignItems:'center' , boxShadow:'1px 1px 18px -17px' , borderRadius:'23px',backgroundColor:'white'}}>
<TextField   inputProps={{ inputMode: 'numeric' }}
          label="Amount"
          id="sellamount"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      <Slider
  aria-label="Temperature"
  defaultValue={30}
  getAriaValueText={""}
  valueLabelDisplay="auto"
  step={25}
  marks
  min={0}
  max={100}
  sx={{width:'180px'}}
/>

<div>

<Button onClick={sell} sx={{width:'180px'}} variant="contained">Sell</Button>
</div>
        
        </div>


</Container>


</Container>
   



</div>

  
  </>
  
  )
}

export default BuyCoin