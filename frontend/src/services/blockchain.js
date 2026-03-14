import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../utils/constants";
// import ABI from "./abi.json";

export async function getContract() {

  const provider = new ethers.BrowserProvider(window.ethereum);

  const signer = await provider.getSigner();

  return new ethers.Contract(
    CONTRACT_ADDRESS,
    // ABI,
    signer
  );
}

export async function createProject(desc, amounts) {

  const contract = await getContract();

  const tx = await contract.createProject(desc, amounts);

  await tx.wait();

}