import React from 'react'
import './css/AddCustomCoin.css'

const AddCustomCoin = () => {
  
  
    return (
    <>
   <div id="addcoin">
   <h2>custom coin</h2>  

   <form action="/addcustomcoin" method='POST'>
        <div>Enter Symbol : <input type="text" /></div>
        <div>  Enter Quantity  : <input type="number" /></div>
        <div>Enter Lauch Price (USDT) : <input type="number" /></div>
       <div> <input type="file"  name='symbol'/></div>
      <div>  <input type="submit" value="Upload" /></div>

   </form>

   </div>

    
    </>
  )
}

export default AddCustomCoin