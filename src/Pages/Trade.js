import React, { useReducer } from 'react'
import CoinListBox from '../Components/Users/Coindata/CoinListBox'
import Chart from '../Components/Users/Coindata/Chart'
import BuyCoin from '../Components/Users/Coindata/BuyCoin'
import UserHeader from '../Components/Users/UserHeader'
import CoinData from '../Components/Users/Coindata/CoinData'
import TradeHistory from '../Components/Users/TradeHistory'
import { useEffect, useState } from 'react'
import './css/Trade.css'
import { Box} from '@mui/material';
import SingleCoin from '../Components/Users/Coindata/SingleCoin'
import useContext from 'react'

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

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
    <SingleCoin/>
    <Context.Provider value={{
        symbol:state.symbol,
        custom:state.custom,
        Cprice:state.Cprice,
        dispatcher : dispatcher
    }}>
    <div  className="coinwrap">

    {/* 1250 */}
    <CoinData coins={coins} coinChange={handleCoinChange}/>
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
    <AdvancedRealTimeChart style={{zIndex:-2}} height={714} width={window.innerWidth - 300}  symbol={state.symbol}   theme='dark'    hide_top_toolbar='true' hide_side_toolbar='true' container_id='chart' ></AdvancedRealTimeChart>
    </Box>
    </div>
    
    <BuyCoin coins={coins} coinChange={handleCoinChange}/>
    </Context.Provider>
    {/* <TradeHistory /> */}
        </>
  
  
  
    )
}

export default Trade