import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Typography} from '@mui/material'
const TradeHistory =  () => {
  
  const [tradedata,settradedata]  = useState(0)

  useEffect(()=>{
    const url = "http://64.227.140.80/api/showtrade"; 
    axios.get(url, config)
    .then(res=>{ console.log(res.data)
    settradedata(res.data)
    
    })
    .catch(err=> console.log(err))

  },[tradedata])


  const config = {
    // headers:{
    //   "accessToken":sessionStorage.getItem('accessToken')
    // }
  }
 
  
  


  


  
  return (
    
    
   <>
   
<div style={{padding:'20px'}}><Typography sx={{fontSize:'25px', color:'white'}}>Trade History</Typography></div>

<div  style={{display:'flex', alignItems:'center', justifyContent:'space-around' , padding:'20px',backgroundColor:'#26A17B' , color:'white'}}>
<div style={{width:'10%'}}>ID</div>
<div style={{width:'20%'}}>Name</div>
<div style={{width:'30%'}}>Amount</div>
<div style={{width:'20%'}}>Coin Price</div>
<div style={{width:'10%'}}>Type</div>
<div style={{width:'30%'}}>Date</div>
</div>

{tradedata && tradedata.map((ele)=>{

return <div style={{display:'flex', alignItems:'center',justifyContent:'space-around' , padding:'20px'}}>
{/* {ele.type== 'credit'? :} */}
<div style={{width:'10%'}}><img src={`http://64.227.140.80/api/static/images/coinimage/${ele.currency.toUpperCase()}.png`} alt=""  height="20px" width="20px"/></div>
<div style={{width:'20%',color:'#6F6A6D'}}>{ele.currency}</div>
<div style={{width:'30%',color:((ele.type ==='credit')?'green':'red')}}>{"$ "+ ele.quantity*ele.amount}</div>
<div style={{width:'20%',color:'#6F6A6D'}}>{ele.amount}</div>
<div style={{width:'10%',color:((ele.type ==='credit')?'green':'red')}}>{ele.type}</div>
<div style={{width:'30%',color:'#6F6A6D'}}>{ele.dt}</div>



{/* <div><img src= alt="" /></div> */}

</div>

})}

   
   
   </>
  
  
  
  
    )
}

export default TradeHistory