import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x7fbB2F987F61C27AC28A1380E08e88e626730F42';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}