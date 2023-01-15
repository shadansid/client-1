import React from 'react'
import Registration from './Components/Users/Registration'
import Login from './Components/Users/Login'
import HomePage from './Components/Home/HomePage'
import UserKyc from './Components/Users/UserKyc/UserKyc'
import Logout from './Components/Users/Logout'
import UserPanel from './Pages/UserPanel'
import Dashboard from './Pages/Dashboard'
import TradeHistory from './Components/Users/TradeHistory'
import TransactionHistory from './Components/Users/TransactionHistory'
import Wallet from './Components/Users/Wallet/Wallet'
import User from './Components/Admin/User'
import Test from './Test'

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Trade from './Pages/Trade'
import BuyCoin from './Components/Users/Coindata/BuyCoin'
import AdminPanel from './AdminPage/AdminPanel'
import AllUsers from './Components/Admin/AllUsers'
import Airdrop from './Components/Admin/Airdrop'
import AddCustomCoin from './Components/Admin/AddCustomCoin'
import Vcode from './Components/Users/Vcode'
import Chart from './Components/Users/Chart'
import Referral from './Components/Users/Referral'
import AirdropContest from './Components/Users/AirdropContest'


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      
      <Route exat path='/' element={<HomePage/>}/>
      <Route exat path='/userpanel' element={<UserPanel/>}>
      

      <Route exact path="/userpanel/userkyc" element={<UserKyc/>}/>
      
      
      <Route exact path="/userpanel/transactionhistory" element={<TransactionHistory/>}/>
      <Route exact path="/userpanel/wallet" element={<Wallet/>}/>
      <Route exact path="/userpanel/tradehistory" element={<TradeHistory/>}/>
      <Route exact path="/userpanel/referral" element={<Referral/>}/>
      <Route exact path="/userpanel/userdashboard" element={<Dashboard/>}/>
    
      
      </Route>
      <Route exact path="/Logout" element={<Logout/>}/>
      <Route exact path="/trade" element={<Trade/>}/>
      <Route exact path="/chart" element={<Chart/>}/>
      <Route exact path="/registration" element={<Registration/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/testoy" element={<Test/>}/>
      <Route exact path="/bycoin" element={<BuyCoin/>}/>
      <Route exact path="/vcode" element={<Vcode/>}/>
      <Route exact path="/airdropcontest" element={<AirdropContest/>}/>
     


      {/* admin routes */}
      <Route exat path='/admin' element={<AdminPanel/>}>
      <Route exat path='/admin/allusers' element={<AllUsers/>}/>
      <Route exat path='/admin/airdrop' element={<Airdrop/>}/>
      <Route exat path='/admin/addcoin' element={<AddCustomCoin/>}/>

        </Route>

    </Routes>
  </BrowserRouter>
    
    

    
    </>
    
    )
}

export default App