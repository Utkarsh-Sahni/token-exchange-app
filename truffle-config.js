require('babel-register');
require('babel-polyfill');
require('dotenv').config();

const {MNEMONIC,INFURA_KEY}= process.env;


const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Ganache GUI port (default: 7545) or Ganache CLI port (default: 8545)
      network_id: "*", // Match any network id
    },
    // sepolia: {
    //   provider: function () {
    //     return new HDWalletProvider({
    //       mnemonic: {
    //         phrase: mnemonic,
    //       },
    //       providerOrUrl: `https://sepolia.infura.io/v3/${infuraKey}`, // Replace with the actual Sepolia RPC URL
    //       chainId: 123, // Replace with the Sepolia chain ID
    //     });
    //   },
    //   network_id: 11155111, // Replace with the Sepolia network ID
    //   gas: 5000000, // Adjust the gas limit as needed
    //   gasPrice: 20000000000, // Set the gas price for transactions
    //   skipDryRun: true, // Skip dry run when deploying
    // },
    sepolia: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_KEY),
      network_id: "11155111",
      gas: 4465030,
    }
  },
  compilers: {
    solc: {
      version: "0.5.0", // Replace with the desired Solidity compiler version
    },
  },
};

