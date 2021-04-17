// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./LiteSwapDAO1.sol";

contract LiteSwapDAOFactory is Ownable {


    struct CooperativeGroup{
        address[] memberList;
        uint groupIndex;
    }

    mapping(address => CooperativeGroup) groupMapping;
    address[] public cooperativeGroups;

    string[] public createdGroupNames;

  /// Empty constructor
  constructor() public {

  }

  //create Cooperative Group
  function createCooperativeGroup(string memory groupName, uint amount) public payable returns (LiteSwapDAO1) {

    LiteSwapDAO1 new_cooperative = new LiteSwapDAO1(groupName,  amount );

    address newAddr = address(new_cooperative);

    cooperativeGroups.push(newAddr);
    createdGroupNames.push(groupName);

    groupMapping[newAddr].memberList.push(msg.sender);
    groupMapping[newAddr].groupIndex = cooperativeGroups.length - 1;

    return new_cooperative;


  }

//All users to join a cooperative group
  function joinCooperativeGroup(address _groupAddr) public payable {
          groupMapping[_groupAddr].memberList.push(msg.sender);
  }

  //allow user to payu their due to their cooperative groups
  function payYourGroupDues(uint dues, string memory groupName) public {
    LiteSwapDAO1 groupInstance = new LiteSwapDAO1(groupName, dues);
    groupInstance.contribute(dues);
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