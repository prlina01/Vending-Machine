const { ethers } = require('hardhat')

const { API_KEY, PRIVATE_KEY, CONTRACT_ADDRESS }  = process.env;

const contract = require('../artifacts/contracts/Vending_Machine.sol/Vending_Machine.json');
const alchemyProvider = new ethers.providers.AlchemyProvider('rinkeby', API_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider)

const vendingMachine = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    let balance = await vendingMachine.getVMBalance();
    console.log('Balance at the start: ', balance)
    await vendingMachine.restock(20);
    let tx = await vendingMachine.purchase(1, {value: ethers.utils.parseEther('2')});
    await tx.wait();

    balance = await vendingMachine.getVMBalance();
    console.log('Balance at the end: ', balance);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error); process.exit()
    });