import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Showbalance(){
    const wallet=useWallet();
    const {connection} =useConnection();
    async function showbalance(){
        const publickey=wallet.publicKey;
       const balance= await connection.getBalance(publickey);
       const balance_SOL=balance/LAMPORTS_PER_SOL;
       document.getElementById("balance").innerHTML="your balance is"+balance_SOL+"SOl";
    }
    return (
        <div>
        
        <button onClick={showbalance}style={{ backgroundColor: "#512da8", color: "white", padding: "15px 20px", borderRadius: "5px" }}>
    Show Balance
</button>

         <span id="balance"></span> 
        </div>
    );
}