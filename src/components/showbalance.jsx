import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function Showbalance(){
    const [showornot,setShowornot]=useState(false)
    const wallet=useWallet();
    const {connection} =useConnection();
    async function showbalance({check}){
        const publickey=wallet.publicKey;
       const balance= await connection.getBalance(publickey);
       const balance_SOL=balance/LAMPORTS_PER_SOL;
       if(check){   
       document.getElementById("balance").innerHTML="Your balance is "+balance_SOL+" SOL";
       }
       else if (!check){
        document.getElementById("balance").innerHTML="...";            
       }
    }
    return (
        <div className="flex flex-col bg-gray-100 p-4 rounded-md m-">
        
        <button onClick={()=>{
            let toggledshow=!showornot
            setShowornot((c)=>!c)
            showbalance({check:toggledshow})}} 
            className="bg-blue-500 font-semibold p-3 m-1 rounded-md text-white">
            Show Balance </button>
         <span id="balance"  className="p-3 m-1 rounded-md font-semibold text-black bg-gray-200">....</span> 
        </div>
    );
}