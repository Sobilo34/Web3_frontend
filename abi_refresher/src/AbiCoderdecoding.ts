import { ethers } from 'ethers';

// The encoded uint256 value
const encodedValue = '0x00000000000000000000000000000000000000000000000000004c2b301f1244';

// Create an instance of AbiCoder
const abiCoder = new ethers.AbiCoder();

// Decode the value
const decodedValue = abiCoder.decode(['uint256'], encodedValue);

console.log("Decoded value: ", decodedValue[0].toString());

// If you want to format it using its decimals 
console.log("Formatted value: ", ethers.formatUnits(decodedValue[0], 6));