const hre = require("hardhat")
const fs = require("fs")

async function main(){

 const Contract =
 await hre.ethers.getContractFactory("MilestoneFunding")

 const contract = await Contract.deploy()

 await contract.waitForDeployment()

 const address =
 await contract.getAddress()

 console.log("Contract deployed:", address)

 saveFrontendFiles(contract,address)

}

function saveFrontendFiles(contract,address){

 const data = {
  address: address
 }

 fs.writeFileSync(
  "../frontend/src/utils/contract-address.json",
  JSON.stringify(data,null,2)
 )

 const artifact =
 artifacts.readArtifactSync("MilestoneFunding")

 fs.writeFileSync(
 "../frontend/src/services/abi.json",
 JSON.stringify(artifact.abi,null,2)
 )

}

main().catch((error)=>{
 console.error(error)
 process.exitCode = 1
})