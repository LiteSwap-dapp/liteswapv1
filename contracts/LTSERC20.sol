// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


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
contract LTSERC20 is ERC721 {
    address private owner;
    constructor() ERC721("LITESWAPTOKEN", "LTS") {
        owner = msg.sender;
    }

    function mintLTS(uint256 amount) private {
        _mint(msg.sender, amount);
    }
}
