import { getContract } from "../utils/getContract";

const contract = getContract();

// Example: call escrowCount()
const fetchEscrowCount = async () => {
  const count = await contract.escrowCount();
  console.log("Total escrows:", count.toString());
};
