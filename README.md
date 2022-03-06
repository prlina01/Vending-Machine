### Setup
- install `npm` and `npx` on your machine
- run `npm install` to set up all the dependencies (hardhat, ethers, etc.)
- create`.env` file and then fill in the environment variables with your own info
- set up an Alchemy account [here](https://alchemy.com/?a=641a319005)
- set up a [Metamask](https://metamask.io/download.html) wallet with [fake testnet ether](https://www.rinkebyfaucet.com//)

### Run:
- run `npx hardhat run scripts/deploy.js` to deploy the contract to the Rinkeby testnet
- run `npx hardhat run scripts/interact.js` to interact with the smart contract
- run `npx hardhat verify --network rinkeby <your deplooyment address> ` to verify your contract on Etherscan
                                                                                                                                                                       