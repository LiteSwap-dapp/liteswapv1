// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./LiteSwapDAO1.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract LiteSwapDAOFactory is Ownable {


  using SafeMath for uint;

    struct CooperativeGroup{
        address[] memberList;
        uint groupIndex;
    }

    LiteSwapDAO1 new_cooperative;

    mapping(address => CooperativeGroup) groupMapping;
    address[] public cooperativeGroups;

    string[] public createdGroupNames;

    address public currentGroupAddress;
    string public currentGroupName;

  /// Empty constructor
  constructor() public {
    new_cooperative = new LiteSwapDAO1();
  }

  //create Cooperative Group
  function createCooperativeGroup(string memory groupName, uint amount) public payable returns (bool) {
       new_cooperative.createCooperativeGroup(groupName, amount );

  }

//All users to join a cooperative group
  function joinCooperativeGroup(string memory groupName) public payable returns (bool) {
    new_cooperative.addMember(groupName);
  }

  //get group members count

  function getGroupCount(string memory name) public payable returns (uint){
          new_cooperative.getAllGroupMembersCount(name);
  }

    /// Allow retrieving the the array of created contracts
  /// @return An array of all created Cooperative Group contracts
  function getcooperativeGroups() public view returns(address[] memory) {
    return cooperativeGroups;
  }

      /// Allow retrieving the the array of created group names
  /// @return An array of all created Cooperative Group names contracts
  function getcooperativeGroupNames() public view returns (string[] memory) {
    return createdGroupNames;
  }

}