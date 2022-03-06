// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Vending_Machine {
    address public owner;
    mapping(address => uint) public candyBalances; // map owner to the amount of candy he owns

    constructor () {
        owner = msg.sender;
        candyBalances[address(this)] = 100;
    }

    function getVMBalance() public view returns (uint) {
        return candyBalances[address(this)];
    }

    function restock(uint amount) public {
        require(owner == msg.sender, "Only owner can restock the machine!");
        candyBalances[address(this)] += amount;
    }

    function purchase(uint amount) public payable {
        require(msg.value >= amount * 2 ether, "You must pay at least two ether per candy!");
        require(candyBalances[address(this)] >= amount, "Not enough candy in the storage!");
        candyBalances[address(this)] -= amount;
        candyBalances[msg.sender] += amount;
    }


}
