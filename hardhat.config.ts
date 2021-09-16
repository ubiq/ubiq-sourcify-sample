import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import 'hardhat-deploy';

import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 800,
          },
          evmVersion: "istanbul",
        },
      },
    ],
  },
  networks: {
    mainnet: {
      url: "http://127.0.0.1:8588",
      chainId: 8,
      gasPrice: 11000000000,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      "mainnet": '0xc5070A5CB93F4497240a57969485C0FbF5c2ee3A',
    },
  }
};

export default config;