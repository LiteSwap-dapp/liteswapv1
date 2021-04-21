import React, { useState, useEffect } from "react";
import LiteSwapDAOFactoryContract from "./contracts/LiteSwapDAOFactory.json";
import getWeb3 from "./getWeb3";

import "./App.css";

import Connection from  "./Connection";
import Home from  "./components/Home";
import LTSSwap from  "./components/LTSSwap";
import CardDao from  "./components/CardDao";
import Stake from  "./components/Stake";

const App = () => {

  const [web3, setWeb3]= useState(undefined);
  const [accounts, setAccounts]= useState(undefined);
  const [contract, setContract]= useState(undefined);
  const [viewChange, setView] = useState("home")

  useEffect(()=> {

    const init = async ()=> {
         // Get network provider and web3 instance.
         const web3 = await getWeb3();

         // Use web3 to get the user's accounts.
         const accounts = await web3.eth.getAccounts();
   
         // Get the contract instance.
         const networkId = await web3.eth.net.getId();
         const deployedNetwork = LiteSwapDAOFactoryContract.networks[networkId];
         const contract = new web3.eth.Contract(
          LiteSwapDAOFactoryContract.abi,
           deployedNetwork && deployedNetwork.address,
         );
   
      
         setWeb3(web3)
         setAccounts(accounts)
         setContract(contract)

       }

    init()
  }, []) 
    

    return (
      <div className=" container-lts">
        <header className="header">
          <div className="menu">
          <img src="2g.gif" alt="liteswap-logo" className="liteswap-logo" />
          <h1><a onClick={()=>setView("home")} href="#home">LiteSwap</a></h1>
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active" onClick={()=>setView("home")} aria-current="page" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=>setView("swap")} href="#swap" >Swap</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={() =>setView("pool")} href="#pool" >Cooperative Savings</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " onClick={ ()=>setView("stake")}  tabIndex="-1" aria-disabled="true" href="#stake">Stake</a>
              </li>
            </ul>
          </div>
          <div className="wallet">
          <Connection />
          </div>
        </header>
        <div className="divider"></div>
        <React.Fragment>
          {viewChange === "home" ? 
          <Home 
          setView={setView}
          /> : viewChange === "swap"?
          <LTSSwap /> : viewChange === "pool" ?
          <CardDao contract={contract} 
          accounts ={accounts}
          web3 ={web3}/> : viewChange === "stake" ?
          <Stake /> : ""}
        </React.Fragment>
   
        <footer>
        <p class="card-text"><small class="text-muted"></small><small> LiteSwap is sponsored by Binance Africa Master Class 2021 All Right Reserved</small></p>
        </footer>
      </div>
    );
  
}


export default App;