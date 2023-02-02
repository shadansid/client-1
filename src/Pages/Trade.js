import React, { useReducer } from 'react'
import CoinListBox from '../Components/Users/Coindata/CoinListBox'
import Chart from '../Components/Users/Coindata/Chart'
import BuyCoin from '../Components/Users/Coindata/BuyCoin'
import UserHeader from '../Components/Users/UserHeader'
import CoinData from '../Components/Users/Coindata/CoinData'
import TradeHistory from '../Components/Users/TradeHistory'
import { useEffect, useState } from 'react'
import './css/Trade.css'
import { Box,Container} from '@mui/material';
import SingleCoin from '../Components/Users/Coindata/SingleCoin'
import useContext from 'react'
import TradeHistoryTrade from '../Components/Users/TradeHistoryTrade'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Addmoney from '../Components/Users/Wallet/Addmoney'
import Context from '../hooks/useCoin'


const Trade = () => {
  
    const [coins,setCoins] = useState([])

    const handleCoinChange = (coin) => {

        setCoins(coin)



    }
    const reducer = (state,action) => {

        switch(action.type){
    
            case "update":
                return action.payload
            default:
                throw new Error()
        }
    
    
    }
    
    // const [state,dispatcher] = useReducer(reducer,"ETHUSDT")
    const [state,dispatcher] = useReducer(reducer,{symbol:'ETHUSDT',custom:false})
  
    
    return (

    <>
    <UserHeader/>
    {/* <SingleCoin/> */}
    <Container sx={{height:'8vh'}}></Container>
    <hr style={{borderTop:'7px solid #323849'}}/>
    <Context.Provider value={{
        symbol:state.symbol,
        custom:state.custom,
        Cprice:state.Cprice,
        dispatcher : dispatcher
    }}>
    <div  className="coinwrap" style={{overflow:'hidden'}}>

    {/* 1250 */}
    <CoinData coins={coins} coinChange={handleCoinChange} />
    {/* <Container style={{width:'300px'}}></Container> */}
    <Box sx={{ display: { xs: 'none', sm: 'block' }, backgroundColor:'#171B26' }}>
    <AdvancedRealTimeChart style={{zIndex:-2}} height={400} width={window.innerWidth - 600}  symbol={state.symbol}   theme='dark'    hide_top_toolbar='true' hide_side_toolbar='true' container_id='chart' ></AdvancedRealTimeChart>
    <BuyCoin coins={coins} coinChange={handleCoinChange}/>
    </Box>
    <Box sx={{width:'300px', backgroundColor:'#171B26' , borderLeft:'1px solid #363c4e'}}>

        <Box sx={{overflow:'scroll', height:'50vh'}}> 
        <Box sx={{fontSize:'16px', color:'grey',padding:'10px' ,textAlign:'center'}}>Recent Transactions</Box>
            <TradeHistoryTrade></TradeHistoryTrade>
        </Box>
        
        <Box>
       <Addmoney></Addmoney>

        </Box>

    </Box>
    </div>
    
    
    </Context.Provider>
   
        </>
  
  
  
    )
}

export default Trade