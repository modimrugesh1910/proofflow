import { ethers } from "ethers";

export const address = "DEPLOYED_CONTRACT";

export const abi = [
"function createProject(string[] descriptions,uint[] amounts)",
"function fundProject(uint projectId) payable",
"function voteMilestone(uint projectId,uint milestoneId)",
"function releasePayment(uint projectId,uint milestoneId)"
];

export async function getContract(){

const provider = new ethers.BrowserProvider(window.ethereum);

const signer = await provider.getSigner();

return new ethers.Contract(address, abi, signer);
}