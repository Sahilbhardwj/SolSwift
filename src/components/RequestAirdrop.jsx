import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


export function Airdrop(){
    const wallet=useWallet();
    const {connection}=useConnection();
   

    async function requestairdrop(){
      const publickey=wallet.publicKey;
      let inputbox=document.getElementById("amount");
      const amount=inputbox.value
       await connection.requestAirdrop(publickey,amount*LAMPORTS_PER_SOL);
       inputbox.value="" ;
       alert("done");
    }

    return(
         <div className="flex flex-col bg-gray-100 p-4 rounded-md m-2">
             <input   id ="amount" type="text" placeholder="enter amount of Sol"  className="bg-gray-200 p-4 rounded md m-1 font-bold" />
             <button onClick={()=>{requestairdrop()}} className="bg-blue-500 p-4 rounded md m-1 text-white font-bold ">Send Airdrop</button>
           
        </div>
       

    );
}