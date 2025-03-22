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
        <div>
            <input type="text" placeholder="enter Recepient public address" id="to" style ={{ padding: "15px 20px", borderRadius: "5px" }}/>
            <input type="text" placeholder="enter amount" id="amount"  style ={{ padding: "15px 20px", borderRadius: "5px" }}/>
            <button onClick={sendtoken} style={{ backgroundColor: "#512da8", color: "white", padding: "15px 20px", borderRadius: "5px" }} >Send SOL</button>
        </div>
    )
}