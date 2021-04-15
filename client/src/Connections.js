import {useWallet, UseWalletProvider} from "use-wallet"
import React from "react"

function Connection() {
    const wallet = useWallet();
    const connectWallet = async(e) => {
        e.preventDefault();
        await wallet.connect();

    }

    return(  <button type="button" onClick={connectWallet} class="btn btn-primary">Connect Wallet</button>)
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