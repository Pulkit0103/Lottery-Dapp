const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "Paste Your own mnemonic"

module.exports = {
  contracts_build_directory: "./client/src/contracts",
  networks: {

    // For Ganache Deployment

    // development: {
    //   host: "127.0.0.1", // Localhost (default: none)
    //   port: 7545, // Standard Ethereum port (default: none)
    //   network_id: "*", // Any network (default: none)
    // },

    mumbai: {
        provider: () => new HDWalletProvider(mnemonic, 
          `https://polygon-mumbai.g.alchemy.com/v2/GPCpQ9C9ZUEWOxV7Fuo8zD1GDvftkC9Q`),
        network_id: 80001,       
        gas: 5500000,        
        confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.11", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
