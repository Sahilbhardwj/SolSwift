# 🔁 Solana Wallet Interaction App (using  @solana/web3.js)

This is a functional web application that interacts with the **Solana blockchain** using wallet adapters like **Phantom**. The app allows users to:

- Request airdrops on Solana Devnet
- Check SOL balance of their connected wallet
- Send SOL to other Solana addresses

> ⚠️ **Disclaimer**  
> This project prioritizes only  **core functionality over UI/visual design** as i built it to understand and implement  Solana using Web3.js and Wallet Adapter.  


##  Features:

- **Wallet Integration**: Seamless connection with wallets like Phantom using Solana Wallet Adapter.
-  **Request Airdrop**: Request 1 SOL from the Devnet faucet to your connected wallet.
  **Check Balance**: Fetch and display the current SOL balance.
-  **Send SOL**: Transfer SOL to any valid Solana wallet address.


---

##  Technologies Used

- **Solana Web3.js**: For blockchain interaction.
- **Solana Wallet Adapter**: For integrating wallets like Phantom, backpack, etc.
- **React**: Frontend framework.
- **Devnet**: All operations are performed on Solana’s Devnet (safe testing environment).


### Prerequisites

- Node.js installed
- A Solana-compatible browser wallet (e.g., Phantom)

### Setup

```bash
git clone https://github.com/yourusername/SolSwift.git
cd solana-wallet-app
npm install
npm start
