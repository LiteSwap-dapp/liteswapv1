const LiteSwapDAOFactory = artifacts.require("./LiteSwapDAOFactory.sol");
const ILiteswapToken = artifacts.require("./interfaces/ILiteswapToken.sol");
const LiteswapToken = artifacts.require("./LiteswapToken.sol");
const LiteSwapDAO1 = artifacts.require("./LiteSwapDAO1.sol");

module.exports = async(deployer) => {

  await deployer.deploy(LiteswapToken);
  await deployer.deploy(LiteSwapDAO1);
  await deployer.deploy(LiteSwapDAOFactory);  
};
