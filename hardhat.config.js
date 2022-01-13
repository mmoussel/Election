require("@nomiclabs/hardhat-waffle");

const fs = require("fs");

const privateKey = fs.readFileSync(".secret").toString();
const projectId = "8062778dca8c45b5b592db0d25f03acf";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
