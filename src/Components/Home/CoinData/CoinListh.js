import React, { useEffect, useState } from 'react'

import {Container,Grid} from '@mui/material'

function CoinListh(props) {

  
  
  


const showcoin = ()=>{

  console.log(props.symbol);


}


  return (
    <>
   <div className="coinlist" style={{color:'#657489' , border:'none'}} onClick={showcoin}>

    <div  id="coinimg"><img src={props.coinimg} alt="" height="20px" width="20px" /></div>
    <div   id="symbol">{props.symbol}</div>
    <div   id="price" style={{color:((props.color=="g")?"#089981":(props.color=="r")?"#F23645":"")}}>${props.price}</div>
   </div>


   
    </>
  )       
}

export default CoinListh