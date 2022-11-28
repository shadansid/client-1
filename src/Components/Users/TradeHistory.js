import React, { useEffect, useState } from 'react'
import axios from 'axios'
const TradeHistory =  () => {
  
  const [tradedata,settradedata]  = useState([])

 
  const config = {
    // headers:{
    //   "accessToken":sessionStorage.getItem('accessToken')
    // }
  }
 
  const url = "/showtrade";
  


  axios.get(url, config)
  .then(res=>{ console.log(res.data)
  settradedata(res.data)
  
  })
  .catch(err=> console.log(err))


  
  return (
    
    
   <>
   
<h1>hello</h1>


{tradedata.map((ele)=>{

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