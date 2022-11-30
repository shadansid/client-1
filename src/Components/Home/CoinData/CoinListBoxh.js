import React from 'react';
import CoinListh from './CoinListh'

import { useEffect, useState } from 'react';
import axios from 'axios'

function CoinListBoxh({coins}) {
  const [coin,setcoin]=useState([])
  
  const getdata = ()=>{
  
  
  axios("http://165.232.142.159/api/getcoin").then(res=>res.data).then((data)=>{

    console.log(data)
    setcoin(data)

  })
  // fetch('/getcoin').then(res=> res).then((data)=>{
  //   console.log(data)
  //   setcoin(data);
  // })
  
  }
  
 
  
  useEffect(()=>{
    getdata();
  },[])
  
  return (
   
  <>
  <div className="coinlistbox" style={{backgroundColor:'transparent', width:'100%', color:'black'}}>
  {coin.map((element)=>{

    let price = ""
    let color = "n"
    // console.log(coins)
    if(coins!=null&&coins.length>0){
      // console.log(element.symbol)
      
      let t = coins.find((el)=> el.s==element.symbol)
      // console.log(t)
      if(t!=null){
        price = Number(t["p"]).toFixed(3)
        color = t["color"]
      }

    }

     return <CoinListh style={{color:'black' , border:'none'}} key={element.coinid} symbol={element.symbol} coinimg={element.coinimg} price={price} color={color} /> 
     
     })}
  </div>
 

  </> 
    
  
    )
}

export default CoinListBoxh