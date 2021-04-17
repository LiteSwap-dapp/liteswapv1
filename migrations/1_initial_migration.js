var LiteSwapDAOFactory = artifacts.require("./LiteSwapDAOFactory.sol");

module.exports = function(deployer) {
  deployer.deploy(LiteSwapDAOFactory);
};
