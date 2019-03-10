const Lagrange = artifacts.require("./Lagrange.sol")

module.exports = function(deployer) {
	deployer.deploy(Lagrange);
};