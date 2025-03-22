
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import { Airdrop } from './RequestAirdrop';
import { Showbalance } from './showbalance';
import { SendToken } from './SendTokens';



function App() {

    return (
        <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/sNEtTVchX7ZHtgTkL7s6qZfpV-ygp32e"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <div style={{width:"100vw" , display:"flex",justifyContent:"center" ,marginBottom: "100px" }}>
                
 { /* these are connect and disconnect buttons wheich is used to connect with existing solana supported wallets  */}
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                    </div>






                 <div >
                    <div style={{width:"100vw" , display:"flex",marginBottom:"20px"}}>
                    <Airdrop/>
                    <Showbalance/>
                    </div> 

                   

                    <div style={{width:"100vw" , display:"flex",marginBottom:"20px"}}>
                    <SendToken/>
                    </div> 


                </div>         
                    { /* Your app's components go here, nested within the context providers. */ }
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App