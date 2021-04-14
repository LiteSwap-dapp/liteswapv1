var LiteSwapDAO = artifacts.require("./LiteSwapDAO.sol");

module.exports = function(deployer) {
  deployer.deploy(LiteSwapDAO);
};
