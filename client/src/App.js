import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LiteSwapv1Contract from "./contracts/LiteSwapV1.json";
import getWeb3 from "./getWeb3";

import "./App.css";

import Connection from  "./Connections.js";
import Home from  "./components/Home.js";
import Swapping from  "./components/LTSSwap.js";
import Cooperative from  "./components/CardDao.js";

const App = () => {

  const [web3, setWeb3]= useState(undefined);
  const [accounts, setAccounts]= useState(undefined);
  const [contract, setContract]= useState(undefined);

  useEffect(()=> {

    const init = async ()=> {
         // Get network provider and web3 instance.
         const web3 = await getWeb3();

         // Use web3 to get the user's accounts.
         const accounts = await web3.eth.getAccounts();
   
         // Get the contract instance.
         const networkId = await web3.eth.net.getId();
         const deployedNetwork = LiteSwapv1Contract.networks[networkId];
         const instance = new web3.eth.Contract(
           LiteSwapv1Contract.abi,
           deployedNetwork && deployedNetwork.address,
         );
   
      
         setWeb3(web3)
         setAccounts(accounts)
         setContract({contract: instance})
    }

    init()
  }, []) 
    

    return (
      <div className=" container-lts">
        <header className="header">
          <div className="menu">
          <img src="2g.gif" className="liteswap-logo" />
          <h1>LiteSwap</h1>
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active" href="/" aria-current="page" href="#"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/swap">Swap</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/cooperative">Credit Union </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Lite</a>
              </li>
            </ul>
          </div>
          <div className="wallet">
          <Connection />
          </div>
        </header>
        <BrowserRouter>
        <Switch>
        <Route path="/">
            <Home/>
          </Route>
          <Route path="/swap">
            <Swapping/>
          </Route>
          <Route path="/cooperative">
            <Cooperative/>
          </Route>
        </Switch>
            
        </BrowserRouter>
   
        <footer></footer>
      </div>
    );
  
}


export default App;