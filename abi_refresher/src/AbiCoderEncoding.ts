import { ethers } from 'ethers';

// Define the function signature
const functionSignature = "balanceOf(address)";

// Calculate the function selector (first 4 bytes of the keccak256 hash of the function signature)
const functionSelector = ethers.id(functionSignature).slice(0, 10);

// Create an instance of AbiCoder
const abiCoder = new ethers.AbiCoder();

// Encode the function parameters
const encodedParams = abiCoder.encode(
  ['address'],
  ['0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640']
);

// Combine the function selector and encoded parameters
const encodedFunctionData = functionSelector + encodedParams.slice(2); // Remove '0x' from encodedParams

console.log("Encoded function data: ", encodedFunctionData);