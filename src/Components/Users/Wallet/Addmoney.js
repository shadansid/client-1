import React ,{useState}from 'react'
import {Container,Button,TextField,InputLabel,Select,MenuItem, Typography} from '@mui/material'
import axios from 'axios';

const Addmoney = () => {
    const [age, setAge] = React.useState('');
    const [pyurl,setpyurl]=useState();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

const addmn = ()=>{
let amountbox = document.getElementById('amountbox').value;


axios.post('/addmoney', {
    amount:amountbox,
    currency:age
  },{
    headers:{"Authorization":" Bearer Npk11wrM5snF7ScEidhYdyTxhVEzXu2xxsLqbhiV--C3itqF76Z3obt_tF"}
  }
  

  )
  .then(function (response) {
    
    console.log(response);

    setpyurl(response.data.payment_url)

    window.open(response.data.payment_url,null,'popup')


  })
  .catch(function (error) {
    console.log(error);
  });

    

}

  
    return (
    <>
    <Container sx={{padding:'20px',border:'1px solid black'}}>
    <div style={{padding:'20px'}}><Typography sx={{fontSize:'25px'}}>Add Money</Typography></div>

        <Container style={{padding:'30px', display:'flex',flexDirection:'column' }}>
        <div>
       
        <Select sx={{height:'40px' , width:'18%', marginRight:'1px'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          >
          <MenuItem sx={{display:'flex', alignItems:'center'}} value={"usdt"}> <div><img src="http://localhost:5000/static/images/coinimage/usdt.png"  height='20px' width='20px' alt="" /></div> <div>&nbsp; USDT</div> </MenuItem>

          <MenuItem sx={{display:'flex', alignItems:'center'}} value={"btc"}><div><img src="http://localhost:5000/static/images/coinimage/btc.png"  height='20px' width='20px' alt="" /></div> <div>&nbsp; BTC</div></MenuItem>
          <MenuItem sx={{display:'flex', alignItems:'center'}} value={"eth"}><div><img src="http://localhost:5000/static/images/coinimage/eth.png"  height='20px' width='20px' alt="" /></div> <div>&nbsp; ETH</div></MenuItem>
        </Select>
        <TextField  type='number'  id="amountbox" sx={{height:'40px' , width:'80%'}} size='small' placeholder='Amount' /></div>
        <div></div>
        <Button  sx={{marginTop:'10px'}} onClick={addmn} variant='contained'>Add Money</Button>
        </Container>
    
            </Container>
    </>
  )
}

export default Addmoney