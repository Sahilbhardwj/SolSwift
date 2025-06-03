import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function SendToken(){
    const wallet=useWallet();
    const {connection}=useConnection();

    async function sendtoken(){
    let to=document.getElementById("to").value;
    let amount=document.getElementById("amount").value;
    const transaction=new Transaction();
   
    transaction.add(SystemProgram.transfer(
        {   fromPubkey:wallet.publicKey,
            toPubkey:new PublicKey(to),
            lamports: amount*LAMPORTS_PER_SOL,  }
    ));

     await wallet.sendTransaction(transaction,connection);
     alert("transaction done");
}
    return(
        <div className="flex flex-col bg-gray-100 p-4 rounded-md m-2">
            <input type="text" placeholder="enter Recepient public address" id="to" className="bg-gray-200 p-4 rounded md m-1 font-bold"/>
            <input type="text" placeholder="enter amount" id="amount"  className="bg-gray-200 p-4 rounded md m-1 font-bold"/>
            <button onClick={sendtoken} className="bg-blue-500 p-4 rounded md m-1 text-white font-bold" >Send SOL</button>
        </div>
    )
}
