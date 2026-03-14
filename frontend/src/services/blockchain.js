import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../utils/constants";
// import ABI from "./abi.json";

import contractData from "./contractData.json"

export async function getContract() {

  if (!window.ethereum) {
    alert("Install MetaMask")
    return
  }

  const provider = new ethers.BrowserProvider(window.ethereum)
  const signer = await provider.getSigner()

  return new ethers.Contract(
    CONTRACT_ADDRESS || contractData.address,
    artifact.abi,
    signer
  )
}

export async function createProject(descriptions, amounts) {

  const contract = await getContract()

  const tx = await contract.createProject(descriptions, amounts)

  await tx.wait()
}

export async function fundProject(projectId, amount) {

  const contract = await getContract()

  const tx = await contract.fundProject(projectId, {
    value: ethers.parseEther(amount)
  })

  await tx.wait()
}

export async function voteMilestone(projectId, milestoneId) {

  const contract = await getContract()

  const tx = await contract.voteMilestone(projectId, milestoneId)

  await tx.wait()
}

export async function approveMilestone(projectId, milestoneId) {

  const contract = await getContract()

  const tx = await contract.approveMilestone(projectId, milestoneId)

  await tx.wait()
}

export async function releasePayment(projectId, milestoneId) {

  const contract = await getContract()

  const tx = await contract.releasePayment(projectId, milestoneId)

  await tx.wait()
}

export async function getMilestones(projectId) {

  const contract = await getContract()

  return await contract.getMilestones(projectId)
}