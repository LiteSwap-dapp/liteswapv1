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

    mapping(address => CooperativeGroup) groupMapping;
    address[] public cooperativeGroups;

    string[] public createdGroupNames;

    address public currentGroupAddress;
    string public currentGroupName;

  /// Empty constructor
  constructor() public {

  }

  //create Cooperative Group
  function createCooperativeGroup(string memory groupName, uint amount) public payable {
    LiteSwapDAO1 new_cooperative = new LiteSwapDAO1(groupName,  amount );

    address newAddr = address(new_cooperative);
    
    address[] storage groupArr = cooperativeGroups;
    string[] storage groupNames = createdGroupNames;

    groupArr.push(newAddr);
    groupNames.push(groupName);

    //groupMapping[newAddr].memberList.push(msg.sender);
    groupMapping[newAddr].groupIndex = cooperativeGroups.length.sub(1);

    cooperativeGroups = groupArr;
    createdGroupNames = groupNames;


  }

//All users to join a cooperative group
  function joinCooperativeGroup(string memory name) public payable {
     address addr = currentGroupAddress;

     string[] memory _arr = createdGroupNames;

      for(uint i = 0; i < _arr.length; i++){
             if(createdGroupNames[i] == bytes(name) ){
              addr =  cooperativeGroups[i];
        }
      }
     groupMapping[addr].memberList.push(msg.sender);
     currentGroupAddress = addr;
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