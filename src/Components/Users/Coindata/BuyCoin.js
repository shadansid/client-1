import React, { useContext, useEffect } from 'react';
import './Css/buycoin.css'
import { useState } from 'react';
import axios from 'axios'
import { TextField , InputAdornment} from '@mui/material';
import {Container, Typography, Toolbar,IconButton, Button,Badge,Grid,Divider, Box, Slider} from '@mui/material'
import Context from '../../../hooks/useCoin';
import {Link} from 'react-router-dom';

function BuyCoin({coins,coinChange}) {
  const context = useContext(Context)
 useEffect(()=>{
avbl();
avblsell();

 },[context])

 


const [buyres, setBuyres] = useState();
const [sellres, setSellres] = useState();


setInterval(()=>{
  setBuyres(0)

},4000)


 const buy = ()=>{
  
let buyamount = parseFloat(document.getElementById('buyamount').value) 
// console.log(buyamount)

let postData = {
  amount: buyamount,
  symbol: context.symbol,
  custom:context.custom,
  Cprice:context.Cprice,
  Price:context.Price

  
};

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "accessToken": sessionStorage.getItem('accessToken'),
  }
};



axios.post('/pay', postData, axiosConfig)
.then((res) => {

  setBuyres(res.data)
})
.catch((err) => {
  // console.log("AXIOS ERROR: ", err);
})



 } 
  // Buy Limit Function =-------------------------------------------------
  const buyLimit = ()=>{
  
    let buyamount = parseFloat(document.getElementById('buyamount').value) 
    let limitprice = parseFloat(document.getElementById('limitprice').value) 
    // console.log(buyamount)
    
    let postData = {
      amount: buyamount,
      symbol: context.symbol,
      custom:context.custom,
      Cprice:context.Cprice,
      Price:context.Price,
      limitprice:limitprice
    
      
    };
    
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "accessToken": sessionStorage.getItem('accessToken'),
      }
    };
    
    
    
    axios.post('/limit', postData, axiosConfig)
    .then((res) => {
    
      // setBuyres(res.data)
    })
    .catch((err) => {
      // console.log("AXIOS ERROR: ", err);
    })
    
    
    
     } 
      


// Sellcoin function ------------------------------------------
 const sell = ()=>{

  let sellamount = document.getElementById('sellamount').value ;
// console.log(sellamount)


fetch("/sellcoin", {
  method: "POST",

  body: JSON.stringify({
      amount: sellamount,
      symbol: context.symbol,
      custom:context.custom,
      Cprice:context.Cprice
  }),
   
  // Adding headers to the request
  headers: {
      "Content-type": "application/json; charset=UTF-8",
      accessToken: sessionStorage.getItem('accessToken')
  }
})

.then(response => response.json())


.then(json => {
  // console.log(json)
  setSellres(json)
  


});




}

const [avblCoin , setavblCoin] = useState("");

const avbl = ()=>{

  axios.post('/avbl', {symbol:context.symbol})
  .then((res) => {
  
    setavblCoin(res.data)
  })
  .catch((err) => {
    // console.log("AXIOS ERROR: ", err);
  })
  

}
const [avblsellCoin,setavblsellCoin] = useState(0);
const avblsell = ()=>{

  axios.post('/avblsell', {symbol:context.symbol})
  .then((res) => {
  
    setavblsellCoin(res.data)
  })
  .catch((err) => {
    // console.log("AXIOS ERROR: ", err);
  })
  

}





const [amountBox ,setamountBox ] = useState("Amount");
const onchangeBuy = (e)=>{
    e.preventDefault()
    settesting(e.target.value);

    if(context.custom){
      let n1 = parseFloat(e.target.value);
      let n4 = e.target.value;
      let   n2 = parseFloat(context.price);
      let   n5 = context.Cprice;
      setamountBox((n1/n2).toFixed(4))
      return 0;
    }

   let n1 = parseFloat(e.target.value);
   let n4 = e.target.value;
   let   n2 = parseFloat(context.price);
   let   n5 = context.price;
   setamountBox((n1/n2).toFixed(4))
   console.log("this is very big issue please fix it " + n1)
   console.log("this is very big issue please fix it " + n2)
   console.log("this is very big issue please fix it " + n4)
   console.log("this is very big issue please fix it " + n5)

      



}
  
const [slider, setSlider] = useState(0);
const [testing, settesting] = useState(0);

const sliderX = (e)=>{

      setSlider(e.target.value)

    let num = parseFloat(e.target.value)
    let num2 = parseFloat(avblCoin.msg)
    
    let newprice = (num2*num)/100;
    
      
  settesting(newprice)
  
  let n1 = parseFloat(newprice);
  let n4 = e.target.value;
  let   n2 = parseFloat(context.price);
  let   n5 = context.price;
  setamountBox((n1/n2).toFixed(4))
  
  



}

  
  // Sell change .....................................................................
  
  
  
  
  
  
  const [amountBox2 ,setamountBox2 ] = useState("Amount");
const onchangeSell = (e)=>{
    e.preventDefault()
    settesting2(e.target.value);

    if(context.custom){
      let n1 = parseFloat(e.target.value);
      let n4 = e.target.value;
      let   n2 = parseFloat(context.price);
      let   n5 = context.Cprice;
      setamountBox2((n1/n2).toFixed(4))
      return 0;
    }

   let n1 = parseFloat(e.target.value);
   let n4 = e.target.value;
   let   n2 = parseFloat(context.price);
   let   n5 = context.price;
   setamountBox2((n1/n2).toFixed(4))
   console.log("this is very big issue please fix it " + n1)
   console.log("this is very big issue please fix it " + n2)
   console.log("this is very big issue please fix it " + n4)
   console.log("this is very big issue please fix it " + n5)

      



}
  
const [slider2, setSlider2] = useState(0);
const [testing2, settesting2] = useState(0);

const sliderX2 = (e)=>{

      setSlider2(e.target.value)

    let num = parseFloat(e.target.value)
    let num2 = parseFloat(avblsellCoin.msg*context.price)
    
    let newprice = (num2*num)/100;
    
      
  settesting2(newprice)
  
  let n1 = parseFloat(newprice);
  let n4 = e.target.value;
  let   n2 = parseFloat(context.price);
  let   n5 = context.price;
  setamountBox2((n1/n2).toFixed(4))
  
  



}
  
  
  
  
  
  
  
  
  
  // Sell change .....................................................................
  
  

// Limit Function
const [limit, setlimit] = useState(0)
const limitX = ()=>{

    

        setlimit(1)
    

}
  // Market Function
  const market = ()=>{
    setlimit(0)
  }
  
  
  return (
   
  <>
   <div className="coin" style={{backgroundColor:'#171B26', zIndex:'2'}}>

    <div style={{paddingLeft:'30px',paddingTop:'20px' , display:'flex', gap:'10px', alignItems:'center'}}>
    <Typography>

<Link onClick={limitX} style={{textDecoration:'none', color:'orange' , fontSize:'13px', padding:'10px'}} to=''>Limit</Link>
</Typography>

<Typography>
<Link onClick={market} style={{textDecoration:'none', color:'orange' , fontSize:'13px', padding:'10px'}} to=''>Market</Link>
</Typography>


<Typography>
<Link style={{textDecoration:'none', color:'orange' , fontSize:'13px', padding:'10px'}} to=''>Stop-Limit</Link>
</Typography>


       </div>

<Box sx={{display:'flex' ,gap:'20px',justifyContent:'center' , alignItems:'center' , padding:'10px' }}>


<div>  
<div style={{display:'flex', flexDirection:'column' , justifyContent:'start', alignItems:'center'}}>


<div>

<input type="number" disabled  placeholder={"Avbl" + " " + ": " + "$ "+avblCoin.msg} style={{background:'transparent',padding:'15px',width:'48ch' ,margin:'10px', border:'1px solid grey'}} />
</div>
         
         {limit? <div>

<input type="number" id="limitprice"  placeholder={"Price"} style={{background:'transparent',padding:'15px',width:'48ch' ,margin:'10px', border:'1px solid grey'}} />
</div>:<span></span>}
          
          <div>

          <input type="number" id="buyamount" value={testing?testing:""} onChange={onchangeBuy} placeholder={context.symbol} style={{background:'transparent',padding:'15px',width:'48ch' ,margin:'10px', border:'1px solid grey'}} />
          </div>

          <div>

<input type="number"  value={amountBox} placeholder="Amount" style={{background:'transparent',margin:'10px',padding:'15px' ,width:'48ch', border:'1px solid grey'}} />
</div>
      
      {/* <TextField  size='small' inputProps={{ readonly: true }}
          label="Amount"  value={'--'} 
          id="buyamount" color="primary"
          sx={{ m: 1, width: '48ch',input:{color:"#363C4E"}}}
          focused />
         */}

      <Slider  size='small'
  aria-label="Temperature"
  defaultValue={0}
  value={slider}
  getAriaValueText={""}
  valueLabelDisplay="auto"
  step={25} onChange={sliderX}
  marks
  min={0}
  max={100} color="success"
  sx={{width:'45ch'}}
              />
              

              


<div>

{/* <Button size='small' onClick={buy} sx={{width:'52ch'}} color="success" variant="contained">Buy</Button> */}

{!limit? <span><Button size='small' onClick={buy} sx={{width:'52ch'}} color="success" variant="contained">Buy</Button></span>:<span></span>}


{limit? <span> <Button size='small' onClick={buyLimit} sx={{width:'52ch'}} color="success" variant="contained">Limit</Button></span>:<span></span>}


<div>{buyres? <div style={{color:'grey',fontSize:'14px'}}>{buyres.msg}</div>:<div></div>}</div>
</div>
        
        </div>
</div>
























{/* ===============================================Sell ======================================= */}

<div style={{display:'flex', flexDirection:'column'  ,justifyContent:'center', alignItems:'center'}}>

<div>                                                                           

<input type="number" disabled  placeholder={"Avbl" + " " + ": " + "$ "+     (context.custom?avblsellCoin.msg*context.Cprice:avblsellCoin.msg*context.price).toFixed(3) } style={{background:'transparent',padding:'15px',width:'48ch' ,margin:'10px', border:'1px solid grey'}} />
</div>
{limit? <div>

<input type="number" id="limitsellprice"  placeholder={"Price"} style={{background:'transparent',padding:'15px',width:'48ch' ,margin:'10px', border:'1px solid grey'}} />
</div>:<span></span>}
<div>

<input type="number" id="sellamount" placeholder={context.symbol}  value={testing2?testing2:""}   onChange={onchangeSell} style={{background:'transparent',margin:'10px',width:'48ch',padding:'15px' , m:"1", border:'1px solid grey'}} />
</div>

<div>

<input type="number" disabled  placeholder={amountBox2}  style={{background:'transparent',padding:'15px' ,margin:'10px',width:'48ch', border:'1px solid grey'}} />
</div>
        
      <Slider size='small'
  aria-label="Temperature"
  defaultValue={0} value={slider2}
  getAriaValueText={""}
  valueLabelDisplay="auto"
  step={25}
  marks onChange={sliderX2}
  min={0}
  max={100} color="error"
  sx={{width:'45ch'}}
/>

<div>

{/* <Button size='small' onClick={sell} sx={{width:'52ch'}} color="error" variant="contained">Sell</Button> */}
{!limit? <span><Button size='small' onClick={sell} sx={{width:'52ch'}} color="error" variant="contained">sell</Button></span>:<span></span>}


{limit? <span> <Button size='small' sx={{width:'52ch'}} color="error" variant="contained">Limit sell</Button></span>:<span></span>}


<div>{sellres && sellres.msg}</div>
</div>
        
        </div>



</Box>



   



</div>

  
  </>
  
  )
}

export default BuyCoin