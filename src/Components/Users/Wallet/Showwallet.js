import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Typography,Button} from '@mui/material'
const Showwallet = () => {
    const [walletdata,setwalletdata]  = useState([])
    const [total, settotal] = useState(0);
  
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
    let totalbal = 0;
    res.data.forEach(item=>{

      
      totalbal += item.quantity; 
    })
    settotal(totalbal);
    




    
    })
    // .catch(err=> console.log(err))


   


  },[walletdata])

console.log("this is wallet data "+ walletdata.quantity)
   
    
  
    return (
    
<>
<div style={{padding:'20px'}}><Typography sx={{fontSize:'25px'}}>Wallet Balance</Typography></div>
<div style={{fontSize:'25px'}}>{total && "Total Amount ≈" + "$" + total*81.61}</div>

{walletdata && walletdata.map((ele)=>{

return <div style={{display:'flex', alignItems:'center', justifyContent:'space-around' , padding:'20px'}}>
{/* {ele.type== 'credit'? :} */}
<div><img src={`http://localhost:5000/static/images/coinimage/${ele.currency}.png`} alt=""  height="20px" width="20px"/></div>
<div>{ele.currency}</div>
<div>{ele.quantity}</div>
<div><Button>Widthraw</Button></div>



{/* <div><img src= alt="" /></div> */}

</div>

})}


</>
  )
}

export default Showwallet