import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Typography} from '@mui/material'
const TradeHistory =  () => {
  
  const [tradedata,settradedata]  = useState([])

  useEffect(()=>{
    const url = "http://165.232.142.159/api/showtrade";
    axios.get(url, config)
    .then(res=>{ console.log(res.data)
    settradedata(res.data)
    
    })
    .catch(err=> console.log(err))

  },[])


  const config = {
    // headers:{
    //   "accessToken":sessionStorage.getItem('accessToken')
    // }
  }
 
  
  


  


  
  return (
    
    
   <>
   
<div style={{padding:'20px'}}><Typography sx={{fontSize:'25px'}}>Trade History</Typography></div>


{tradedata && tradedata.map((ele)=>{

return <div style={{display:'flex', alignItems:'center', justifyContent:'space-around' , padding:'20px'}}>
{/* {ele.type== 'credit'? :} */}
<div><img src={`http://localhost:5000/static/images/coinimage/${ele.currency}.png`} alt=""  height="20px" width="20px"/></div>
<div>{ele.currency}</div>
<div>{ele.quantity}</div>
<div>{ele.amount}</div>
<div>{ele.type}</div>
<div>{ele.dt}</div>


{/* <div><img src= alt="" /></div> */}

</div>

})}

   
   
   </>
  
  
  
  
    )
}

export default TradeHistory