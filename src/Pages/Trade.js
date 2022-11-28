import React from 'react'
import CoinListBox from '../Components/Users/Coindata/CoinListBox'
import Chart from '../Components/Users/Coindata/Chart'
import BuyCoin from '../Components/Users/Coindata/BuyCoin'
import UserHeader from '../Components/Users/UserHeader'
import CoinData from '../Components/Users/Coindata/CoinData'
import TradeHistory from '../Components/Users/TradeHistory'
import { useEffect, useState } from 'react'
import './css/Trade.css'
import SingleCoin from '../Components/Users/Coindata/SingleCoin'
import useContext from 'react'

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";


const Trade = () => {
  
    const [coins,setCoins] = useState([])

    const handleCoinChange = (coin) => {

        setCoins(coin)



    }

  
    return (
  
    <>
    <UserHeader/>
    <SingleCoin/>
    <div className="coinwrap">

    {/* 1250 */}
    <CoinData coins={coins} coinChange={handleCoinChange}/>
    <AdvancedRealTimeChart style={{zIndex:-2}} height={714} width={window.innerWidth - 300}  symbol="ETHUSDT"   theme='dark' ></AdvancedRealTimeChart>
    </div>
    
    <BuyCoin coins={coins} coinChange={handleCoinChange}/>
    <TradeHistory />
        </>
  
  
  
    )
}

export default Trade