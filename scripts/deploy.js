const {ethers} = require('hardhat')

async function main() {
    const vendingMachineFactory = await ethers.getContractFactory('Vending_Machine');
    const vendingMachine = await vendingMachineFactory.deploy()
    console.log(vendingMachine.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error); process.exit()
    });