// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


interface ILiteswapToken {
    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);
    
//     function name() external pure returns (string memory);
//     function symbol() external pure returns (string memory);
//     function decimals() external pure returns (uint8);
//      function totalSupply() external view returns (uint256);
     function balanceOf(address _owner) external view returns (uint256);
     function transfer(address _to, uint256 _value) external returns (bool success);
     function approve(address _spender, uint256 _value) external returns (bool success);
     function transferFrom(address _from, address _to, uint256 _value) external returns (bool success);
     function allowance(address _owner, address _spender) external view returns (uint256 remaining);
}