import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Typography,Button} from '@mui/material'
const WalletBalance = () => {
    const [walletdata,setwalletdata]  = useState([])
    const [total, settotal] = useState(0);
  
  
  useEffect(()=>{

    const config = {
      headers:{
        "accessToken":sessionStorage.getItem('accessToken')
      }
    }
   
    const url = "http://64.227.140.80/api/showwallet";
  
  
    axios.get(url, config)
    .then(res=>{ 
    setwalletdata(res.data)
    let totalbal = 0;
      res.data.forEach(item=>{

        
        totalbal += item.quantity; 
      })
      settotal(totalbal);
      

    })
    .catch(err=> console.log(err))


   


  },[walletdata])


   
    
  
    return (
    
<>
<div style={{padding:'20px'}}><Typography sx={{fontSize:'25px' ,color:'white'}}>Wallet Balance</Typography></div>
{/* <img src="../../../public/bg/wallet.png" alt="images" /> */}
<div style={{fontSize:'24px', color:"white"}}>{total &&  "$ " + total}</div>

</>
  )
}

export default WalletBalance