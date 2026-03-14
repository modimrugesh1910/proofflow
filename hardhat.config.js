// require("@nomicfoundation/hardhat-toolbox");

// module.exports = {
//   solidity: "0.8.20",
//   networks: {
//     sepolia: {
//       url: "https://sepolia.infura.io/v3/7323764f4c604378a93a2787c2c84f6d",
//       accounts: ["7323764f4c604378a93a2787c2c84f6d"]
//     }
//   }
// };

require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const { PRIVATE_KEY, SEPOLIA_RPC } = process.env

module.exports = {
 solidity: "0.8.24",
 networks: {
  sepolia: {
   url: SEPOLIA_RPC,
   accounts: [`0x${PRIVATE_KEY}`]
  }
 },
}