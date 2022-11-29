import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Typography} from '@mui/material'
const Showwallet = () => {
    const [walletdata,setwalletdata]  = useState([])
  
  useEffect(()=>{

    const config = {
      headers:{
        "accessToken":sessionStorage.getItem('accessToken')
      }
    }
   
    const url = "/showwallet";
  
  
    axios.get(url, config)
    .then(res=>{ 
    setwalletdata(res.data)
    
    })
    .catch(err=> console.log(err))




  },[walletdata])


   
    
  
    return (
    
<>
<div style={{padding:'20px'}}><Typography sx={{fontSize:'25px'}}>Wallet Balance</Typography></div>

{walletdata && walletdata.map((ele)=>{

return <div style={{display:'flex', alignItems:'center', justifyContent:'space-around' , padding:'20px'}}>
{/* {ele.type== 'credit'? :} */}
<div><img src={`http://localhost:5000/static/images/coinimage/${ele.currency}.png`} alt=""  height="20px" width="20px"/></div>
<div>{ele.currency}</div>
<div>{ele.quantity}</div>



{/* <div><img src= alt="" /></div> */}

</div>

})}


</>
  )
}

export default Showwallet