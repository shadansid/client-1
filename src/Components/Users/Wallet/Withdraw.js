import React, {useState} from 'react'
import {Typography,Button,TextField,Select,MenuItem} from '@mui/material'
import axios from 'axios';
const Withdraw = () => {
  
  const [coin,setcoin] = useState("");
  const handleChange = (event) => {
    setcoin(event.target.value);
  };

  
  const inwithdraw = ()=>{
let wamount = document.getElementById('wamount').value;
let wemail = document.getElementById('wemail').value;

let data = {

    wamount:wamount,
    wemail:wemail,
    wcoin:coin
}
axios.post('http://64.227.140.80/api/internalwithdraw',data).then((res)=>{
    // console.log(res.data.msg)
})





  }

  const exwithdraw = ()=>{
    let wamount = document.getElementById('amount').value;
    let wemail = document.getElementById('email').value;
    
    let data = {
    
        wamount:wamount,
        wemail:wemail,
        wcoin:coin
    }
    axios.post('http://64.227.140.80/api/externalWithdraw',data).then((res)=>{
        // console.log(res.data.msg)
    })
    
    
    
    
    
      }

  
    return (
  
    <>
     <div style={{padding:"20px" , display:'flex' ,justifyContent:'space-between',alignItems:'center', backgroundColor:'white'}}>
     {/* <h3> Transfer to your own wallet</h3> */}
     <select style={{input:{color:'black', width:'20ch', color:'black'}}} id="coin" value={coin} onChange={handleChange}>  
     <option   style={{color:'black'}} value="ETH">ETH</option>  
<option style={{color:'black'}} value="USDT">USDT</option>  
<option style={{color:'black'}} value="BTC">BTC</option>  
<option  style={{color:'black'}} value="DOGE">DOGE</option>  
</select> 

<TextField small  id='amount' placeholder='Amount'>
</TextField>
<TextField id='email' placeholder='Wallet Address'>
</TextField>
<Button variant="contained" onClick={exwithdraw}>Withdraw</Button>
</div>

    <div style={{padding:"20px",display:'flex' ,justifyContent:'space-between',alignItems:'center', backgroundColor:'#30CFD0'}}>
{/* <h3>Internal Transfer</h3> */}
<select id="coin" value={coin} onChange={handleChange}>  
<option value="ETH">ETH</option>  
<option value="USDT">USDT</option>  
<option value="BTC">BTC</option>  
<option value="DOGE">DOGE</option>  
</select> 

<TextField small  id='wamount' placeholder='Amount'/>

<TextField id='wemail' placeholder='Email Address'/>

<Button variant="contained" onClick={inwithdraw}>Withdraw</Button>
</div>


    
    </>
  
  
  
    )
}

export default Withdraw