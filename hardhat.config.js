require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.10",
  networks: {
    "optimism-kovan": {
      url:"https://kovan.optimism.io",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
