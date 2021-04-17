// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


 /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The defaut value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     *
     * The Liteswap token inherits from the openzeppelin project for added advantage
     */
contract LTSERC20 {
    
    address private owner;

    constructor() public  {
        owner = msg.sender;
    }

    // function mintLTS(uint256 amount) public virtual {
    //     _mint(owner, amount);
    // }
    
}
