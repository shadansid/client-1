import React, { useState } from 'react'
import Login from '../Components/Users/Login'
import {Container, Typography, Toolbar,IconButton, Button,Badge, Grid} from '@mui/material'
import {LineChart,Tooltip,CartesianGrid,Line,XAxis} from 'recharts'
import TransactionHistory from '../Components/Users/TransactionHistory'
import TradeHistory from '../Components/Users/TradeHistory'
import Wallet from '../Components/Users/Wallet/Wallet'
import Showwallet from '../Components/Users/Wallet/Showwallet'

const Dashboard = () => {
  
    // const [isLoggedIn, setLogin] = useState(true);
    // const [Airdrop, setAirdrop] = useState();
    // const [Spinner, setSpinner] = useState();


    return (
   
        <>   
        <Container style={{padding:'30px', height:'90vh'}}>
     
         <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
     
        
        
        
         <Grid item  xs={6} md={12} >
             <Container style={{background:'url("http://localhost:5000/static/images/Airdrop/airdrop.jpg")',backgroundSize:'cover',backgroundPosition:'center' , height:'300px', borderRadius:'23px'}}>
               
     
        
     
                </Container>
           
           </Grid>
     
           
           
           <Grid item  xs={6} >
           <Container style={{background:'white', height:'150px', borderRadius:'23px' }}>
               
           <Showwallet />
     
         
     
        
               </Container>
           </Grid>
     
           <Grid item  xs={6} >
           <Container style={{background:'white', height:'150px', borderRadius:'23px'}}>
               
               </Container>
           </Grid>
     
           <Grid item  xs={6} >
           <Container style={{background:'white', height:'150px', borderRadius:'23px'}}>
           <TradeHistory/>
               </Container>
           </Grid>
     
           <Grid item  xs={6} >
           <Container style={{background:'white', height:'150px', borderRadius:'23px' }}>
               <TransactionHistory></TransactionHistory>
               </Container>
           </Grid>
     
     
     
     
     
     
     
         </Grid>
     
     
         
        </Container>
        
    
        </>
  
  
    )
}

export default Dashboard