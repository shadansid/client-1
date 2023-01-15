import React, { useContext } from 'react';
import './Css/buycoin.css'
import { useState } from 'react';
import axios from 'axios'
import { TextField , InputAdornment} from '@mui/material';
import {Container, Typography, Toolbar,IconButton, Button,Badge,Grid,Divider, Box, Slider} from '@mui/material'
import Context from '../../../hooks/useCoin';


function BuyCoin({coins,coinChange}) {
 
 

 


const avbl = ()=>{


  

}



const [buyres, setBuyres] = useState();
const [sellres, setSellres] = useState();
const context = useContext(Context)

 const buy = ()=>{
  
let buyamount = parseFloat(document.getElementById('buyamount').value) 
console.log(buyamount)

let postData = {
  amount: buyamount,
  symbol: context.symbol,
  custom:context.custom,
  Cprice:context.Cprice

  
};

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "accessToken": sessionStorage.getItem('accessToken'),
  }
};



axios.post('/pay', postData, axiosConfig)
.then((res) => {

  setBuyres(res.data)
})
.catch((err) => {
  // console.log("AXIOS ERROR: ", err);
})



 } 
  

 const sell = ()=>{

  let sellamount = document.getElementById('sellamount').value ;
// console.log(sellamount)


fetch("/sellcoin", {
  method: "POST",

  body: JSON.stringify({
      amount: sellamount,
      symbol: context.symbol,
      custom:context.custom,
      Cprice:context.Cprice
  }),
   
  // Adding headers to the request
  headers: {
      "Content-type": "application/json; charset=UTF-8",
      accessToken: sessionStorage.getItem('accessToken')
  }
})

.then(response => response.json())


.then(json => {
  console.log(json)
  setSellres(json)
  


});




} 
  
  
  
  
  return (
   
  <>
   <div className="coin" style={{backgroundColor:'#171B26', zIndex:'2'}}>

<Container sx={{display:'flex' , justifyContent:'space-around' , alignItems:'center' , padding:'80px' }}>

<Container>
<div>  
<div style={{display:'flex', flexDirection:'column' ,padding:'50px', justifyContent:'start', alignItems:'center' , boxShadow:'1px 1px 18px -17px' , borderRadius:'23px' , backgroundColor:'#171B26'}}>
<div id="avbl" style={{display:'flex' , justifyContent:'flex-start',width: '25ch', height:'4vh'}}> <div style={{color:'#67686C'}}>Avbl :   </div></div>

<TextField  inputProps={{ inputMode: 'number' }} 
          label={context.symbol}
          
          id="buyamount"   color="primary"
          sx={{ m: 1, width: '50ch' ,input:{color:"#185FC6"}}}
          InputProps={{
            startAdornment: <InputAdornment style={{color:'#185FC6'}} position="start"><div style={{color:'#363c4e'}}></div> $</InputAdornment>,
          }}
          focused  />
      
      <TextField   inputProps={{ readonly: true }}
          label="Amount"  value={'--'} 
          id="buyamount" color="primary"
          sx={{ m: 1, width: '50ch',input:{color:"#185FC6"}}}
          focused />
        

      <Slider
  aria-label="Temperature"
  defaultValue={30}
  getAriaValueText={""}
  valueLabelDisplay="auto"
  step={25}
  marks
  min={0}
  max={100} color="success"
  sx={{width:'50ch'}}
/>

<div>

<Button onClick={buy} sx={{width:'50ch'}} color="success" variant="contained">Buy</Button>
<div>{buyres && buyres.msg}</div>
</div>
        
        </div>
</div>
</Container>

<Container>

<div style={{display:'flex', flexDirection:'column' ,padding:'50px' ,justifyContent:'center', alignItems:'center' , boxShadow:'1px 1px 18px -17px' , borderRadius:'23px',backgroundColor:'#171B26'}}>
<div id="avbl"> <div style={{color:'#67686C'}}>Avbl. : </div></div>
<TextField  inputProps={{ inputMode: 'numeric' }}
          label={context.symbol}
          id="sellamount" 
          sx={{ m: 1, width: '50ch', color:'#363C4E',input:{color:"#363C4E"}}}
          InputProps={{
            startAdornment: <InputAdornment style={{color:'#363C4E'}} position="start">$</InputAdornment>,
          }}
          focused />
           <TextField   inputProps={{ readonly: true }}
          label="Amount"  value={'--'} 
          id="buyamount" color="primary"
          sx={{ m: 1, width: '50ch',input:{color:"#363C4E"}}}
          focused />
        
      <Slider
  aria-label="Temperature"
  defaultValue={30}
  getAriaValueText={""}
  valueLabelDisplay="auto"
  step={25}
  marks
  min={0}
  max={100} color="error"
  sx={{width:'50ch'}}
/>

<div>

<Button onClick={sell} sx={{width:'50ch'}} color="error" variant="contained">Sell</Button>
<div>{sellres && sellres.msg}</div>
</div>
        
        </div>



</Container>


</Container>
   



</div>

  
  </>
  
  )
}

export default BuyCoin