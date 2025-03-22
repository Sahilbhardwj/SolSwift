import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Airdrop(){
    const wallet=useWallet();
    const {connection}=useConnection();
    async function requestairdrop(){
      const publickey=wallet.publicKey;
      const amount=document.getElementById("amount").value;
       await connection.requestAirdrop(publickey,amount*LAMPORTS_PER_SOL);
       alert("done");
    }
    return(
        <div>
             <input id ="amount" type="text" placeholder="enter amount of Sol" style ={{ padding: "15px 20px", borderRadius: "5px" }} />
             <button onClick={requestairdrop} style ={{ backgroundColor: "#512da8", color: "white", padding: "15px 20px", borderRadius: "5px" }}>send Airdrop</button>
           
        </div>
       

    );
}