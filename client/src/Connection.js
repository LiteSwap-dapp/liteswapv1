import React from "react";
import {useWallet, UseWalletProvider} from "use-wallet";

function Connection() {
    const wallet = useWallet();
    const connectWallet = async (e) => {
        e.preventDefault();
        await wallet.connect();
    }

    return(     
   
      <button type="button" onClick={connectWallet} class="btn btn-primary">Connect Wallet</button>

      // <a type="button" onClick={connectWallet} class="btn btn-primary">Connect Wallet</a>
  
      
     )
}


export default () => (
    <UseWalletProvider
      chainId={1337}
      connectors={{
        // This is how connectors get configured
        provided: { provider: window.cleanEthereum },
      }}
    >
      <Connection />
    </UseWalletProvider>
  )