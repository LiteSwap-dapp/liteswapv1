import React, { useState, useEffect, Component } from "react";
import LiteSwapv1Contract from "./contracts/LiteSwapV1.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
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

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className=" container-lts">
        <header className="header">
          <div className="menu">
          <img src="2g.gif" className="liteswap-logo" />
          <h1>LiteSwap</h1>
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Swap</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Credit Union </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Lite</a>
              </li>
            </ul>
          </div>
          <div className="wallet">
            <button type="button" class="btn btn-primary">Connect Wallet</button>
          </div>
        </header>
        <main>
          <div className="main-wrapper">
          <div class="card">
          <div class="card-body">
            This is some text within a card body.
          </div>
        </div>
        </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}


export default App;