import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("solidity-coverage");
require("hardhat-deploy");

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "";
const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL ||
  "https://eth-sepolia.g.alchemy.com/v2/YOUR-API-KEY";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      // gasPrice: 130000000000,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    mainnet: {
      url: process.env.MAINNET_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 1,
    },
    mumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gasPrice: 1000000000,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.24",
      },
      {
        version: "0.6.6",
      },
    ],
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    // outputFile: "gas-report.txt",

    // noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
  // namedAccounts: {
  //   deployer: {
  //     default: 0, // here this will by default take the first account as deployer
  //     1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
  //   },
  // },
  mocha: {
    timeout: 200000, // 200 seconds max for running tests
  },
};

export default config;
