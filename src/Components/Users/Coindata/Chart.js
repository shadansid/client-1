import React, { Component } from 'react';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
// import './Css/Chart.css'


function Chart() {
  return (
    <div className="chart">

    <AdvancedRealTimeChart   symbol="ETHUSDT"   theme='dark' ></AdvancedRealTimeChart>
    </div>
  )
}

export default Chart