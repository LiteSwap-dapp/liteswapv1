// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


interface ILiteswapToken {
     function totalSupply() public view returns (uint256);
     function balanceOf(address _owner) public view returns (uint256);
     function transfer(address _to, uint256 _value) public returns (bool success);
     function approve(address _spender, uint256 _value) public returns (bool success);
     function transferFrom(address _from, address _to, uint256 _value) public returns (bool success);
     function allowance(address _owner, address _spender) public view returns (uint256 remaining)
}