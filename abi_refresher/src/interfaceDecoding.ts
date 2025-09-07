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

// The encoded uint256 value
const encodedValue = '0x00000000000000000000000000000000000000000000000000004c2b301f1244';

// Create an instance of the Interface class
const interface = new ethers.Interface(abi);

// Decode the value
const decodedValue = interface.decodeFunctionResult("balanceOf", encodedValue);

console.log("Decoded value: ", decodedValue[0].toString());

// If you want to format it as a more human-readable number
console.log("Formatted value: ", ethers.formatUnits(decodedValue[0], 6));