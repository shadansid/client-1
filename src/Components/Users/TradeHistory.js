import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import {Typography,IconButton} from '@mui/material'
const TradeHistory =  () => {
  
  const [tradedata,settradedata]  = useState(0)

  useEffect(()=>{
    const url = "/showtrade"; 
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
 
  const [detail,setdetail]= useState(0)
  const showdetails = ()=>{
    if(detail==0){

      setdetail(1)
    }else{
      setdetail(0)
    }


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

return <div><div style={{display:'flex', alignItems:'center',justifyContent:'space-around' , padding:'20px'}}>
{/* {ele.type== 'credit'? :} */}
<div style={{width:'10%'}}><img src={`/static/images/coinimage/${ele.currency.toUpperCase()}.png`} alt=""  height="20px" width="20px"/></div>
<div style={{width:'20%',color:'#6F6A6D'}}>{ele.currency}</div>
{ele.type==='credit'?<div style={{width:'30%',color:((ele.type ==='credit')?'green':'red')}}>{"$ "+ ele.quantity*ele.amount}</div>:<div style={{width:'30%',color:((ele.type ==='credit')?'green':'red')}}>{"$ "+ ele.quantity}</div>}
<div style={{width:'20%',color:'#6F6A6D'}}>{ele.amount}</div>
<div style={{width:'10%',color:((ele.type ==='credit')?'green':'red')}}>{ele.type}</div>
<div style={{width:'30%',color:'#6F6A6D'}}>{ele.dt}</div>
<IconButton onClick={showdetails}><InfoOutlinedIcon style={{color:'#7D8794'}} /></IconButton>








</div>
    {detail?<div style={{height:'30vh', backgroundColor:'#151923',borderRadius:'12px',color:'#767E89', fontSize:'16px', padding:'15px'}}>

     <div style={{display:'flex', alignItems:'center',padding:'25px'}}>
     <div style={{display:'flex' , flexDirection:'column', gap:'20px', width:'50%', height:'25vh'}}>
       <div>Order Id :<span style={{color:'#d0d0d0'}}>&nbsp;{ele.orderid}</span></div>  
        <div>Symbol :<span style={{color:'#d0d0d0'}}>&nbsp;{ele.currency}</span></div>  
        <div>Purchase Amount :<span style={{color:'#d0d0d0'}}>&nbsp;$&nbsp;{ele.quantityvalue}</span></div>  
        <div>Coin Price :<span style={{color:'#d0d0d0'}}>&nbsp;$&nbsp;{ele.amount}</span></div>  
        <div>Fee :<span style={{color:'#d0d0d0'}}>&nbsp;$&nbsp;{ele.fee}</span></div>
        </div>  
      
      <div style={{display:'flex' , flexDirection:'column', gap:'20px', width:'50%', height:'25vh'}}>
      <div>Fee % :<span style={{color:'#d0d0d0'}}>&nbsp;{ele.feepercentage}%</span></div>  
        <div>Status :<span style={{color:((ele.status ==='success')?'green':'red')}}>&nbsp;{ele.status}</span></div>  
        <div>Date of Purchase :<span style={{color:'#d0d0d0'}}>&nbsp;{ele.dt}</span></div>  
        {ele.type === 'credit' ? <div>Coin  :<span style={{ color: 'green' }}>&nbsp;+&nbsp;{((ele.quantity * ele.amount) / ele.amount)}&nbsp;{ele.currency}</span></div> : <div>Coin  :<span style={{ color: 'red' }}>&nbsp;-&nbsp;{((ele.quantity) / ele.amount)}&nbsp;{ele.currency}</span></div>}
        
        {ele.type === 'credit' ? <div>Total :<span style={{color:'#d0d0d0'}}>&nbsp;$&nbsp;{ele.fee + (ele.quantity*ele.amount)}</span></div>:<></>  }
        {ele.type === 'debit' ? <div>Total :<span style={{color:'#d0d0d0'}}>&nbsp;$&nbsp;{ele.fee + (ele.quantity)}</span></div>:<></> } 
      </div>
    
     </div>

      
        </div>:<span></span>}


</div>

})}

   
   
   </>
  
  
  
  
    )
}

export default TradeHistory