import type { HardhatUserConfig, NetworkUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-web3";
import "@nomiclabs/hardhat-truffle5";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import "solidity-coverage";
import "dotenv/config";

const bscTestnet: NetworkUserConfig = {
  url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  chainId: 97,
  accounts: [process.env.KEY_TESTNET!],
};

const bscMainnet: NetworkUserConfig = {
  url: "https://bsc-dataseed.binance.org/",
  chainId: 56,
  accounts: [process.env.KEY_MAINNET!],
};

const nexichain: NetworkUserConfig = {
  url: "https://rpc.chainv1.nexi.technology",
  chainId: 4242,
  accounts: [process.env.KEY_NEXI!],
};

const plgchain: NetworkUserConfig = {
  url: "https://rpcurl.mainnet.plgchain.com",
  chainId: 242,
  accounts: [process.env.KEY_PLINGA!],
};

const config = {
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
    customChains: [
      {
        network: "plgchain",
        chainId: 242,
        urls: {
          apiURL: "http://185.128.137.241:4000/api",
          browserURL: "http://185.128.137.241:4000",
        },
      },
      {
        network: "nexichain",
        chainId: 4242,
        urls: {
          apiURL: "http://185.173.129.242:4000/api",
          browserURL: "http://185.173.129.242:4000",
        },
      },
    ]
  },
  networks: {
    hardhat: {},
    // testnet: bscTestnet,
    // mainnet: bscMainnet,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  abiExporter: {
    path: "./data/abi",
    clear: true,
    flat: false,
  },
};

export default config;
