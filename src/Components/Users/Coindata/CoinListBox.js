import React from 'react';
import CoinList from './CoinList'
import './Css/CoinListBox.css'
import { useEffect, useState } from 'react';
import axios from 'axios'

function CoinListBox({coins}) {
  const [coin,setcoin]=useState([])
  
  const getdata = ()=>{
  
  
  axios("/getcoin").then(res=>res.data).then((data)=>{

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
  <div className="coinlistbox">
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

     return <CoinList key={element.coinid} symbol={element.symbol} coinimg={element.coinimg} price={price} color={color} /> 
     
     })}
      <div style={{borderTop:'1px solid #363c4e', height:'38px'}}>hello</div>
  </div>
 
 

  </> 
    
  
    )
}

export default CoinListBox