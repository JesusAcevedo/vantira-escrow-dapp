import { ethers } from "ethers";
import MultiEscrowManager from "../abi/MultiEscrowManager.json";
import { CONTRACT_ADDRESS } from "../constants/contractAddress";

// Connect to Ethereum provider (like Metamask)
export const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, MultiEscrowManager.abi, signer);
};
