import { ethers } from 'ethers';

// Define the ABI for the balanceOf function. As seen here, you can remove other fragments you dont't need
const abi = [{
  "inputs": [
   {
    "internalType": "address",
    "name": "account",
    "type": "address"
   }
  ],
  "name": "balanceOf",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 }
];

// Create an instance of the Interface class
const interface = new ethers.Interface(abi);

// Encode the function call
const encodedFunctionData = interface.encodeFunctionData(
  "balanceOf",
  ["0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640"]
);

console.log("Encoded function data:", encodedFunctionData);