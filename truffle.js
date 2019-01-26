// Allows us to use ES6 in our migrations and tests.
require('babel-register')
const HDWalletProvider = require("truffle-hdwallet-provider");

// Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// Infura should be used in the truffle.config file for deployment to Rinkeby.

module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider("ivory object galaxy garbage fiction level cruise swim pluck domain collect load", "https://rinkeby.infura.io/v3/c0c2ccd635d44b6cb9da57c72299cabc")
      },
      network_id: '4',
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
  // compilers: {
  //    solc: {
  //      version: "0.4.25"  // ex:  "0.4.20". (Default: Truffle's installed solc)
  //    }
  // }
}
