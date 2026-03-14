const hre = require("hardhat")
const fs = require("fs")

async function main() {

  const MilestoneFunding = await hre.ethers.getContractFactory("MilestoneFunding")
  const milestoneFunding = await MilestoneFunding.deploy()

  await milestoneFunding.waitForDeployment()

  const contractAddress = await milestoneFunding.getAddress()

  console.log("MilestoneFunding deployed to:", contractAddress)

  // export ABI + address to frontend
  const artifact = await hre.artifacts.readArtifact("MilestoneFunding")

  const data = {
    address: contractAddress,
    abi: artifact.abi
  }

  fs.writeFileSync(
    "./frontend/src/services/contractData.json",
    JSON.stringify(data, null, 2)
  )

  console.log("ABI + Address exported to frontend")

}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})