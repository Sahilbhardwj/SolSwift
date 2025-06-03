import './index.css';
import './App.css';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './components/RequestAirdrop';
import { Showbalance } from './components/showbalance';
import { SendToken } from './components/SendTokens';

export const ConnectDisconnectbuttons=()=>{
        return(
        <div className='flex justify-center mb-20 bg-gray-200'>
                <div className='m-1'><WalletMultiButton /></div> 
                 <div className='m-1'> <WalletDisconnectButton /></div>  
                
        </div>
        )
}

function App() {

    return (
        <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/sNEtTVchX7ZHtgTkL7s6qZfpV-ygp32e"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider >
                  
                    <ConnectDisconnectbuttons/>
                    <div className=' flex justify-center '>
                        <div  className=' flex flex-col md:grid grid-cols-3 gap-4 bg-gray-200 p-4'>
                            <div> <Showbalance/></div>
                            <div ><Airdrop/></div> 
                            <div ><SendToken/></div>
                        </div>         
                    </div>   
         
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    
    );
};

export default App

