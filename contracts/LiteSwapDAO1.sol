// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;



import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract LiteSwapDAO1 is Ownable {


  using SafeMath for uint;

    //Group Basic info

    address _owner = owner();

    struct GroupDetails {
     bytes32 id;
     string  groupName;
     address groupCreator;
     address[] groupMemberAddressList;
     uint  groupBalance;
     uint groupCreationAmount;  
     uint groupIndex;
     uint createdTime;
     GroupState groupState;
    }
  

     enum GroupState {Created, Updated, Deleted}

     GroupState public groupState;

     mapping(address => uint) public membersContributions;

     mapping(bytes32 => GroupDetails) public groupMembers;

     bytes32[] private groupIds;
     string[] public groupNames;
     address[] public groupMemberList;

     event GroupCreated(address indexed addr, string groupName);

     event MemberJoined(address indexed member, bool joined);

     event MemberAddedFund(address indexed member);

  //     modifier memberHasContributed(address sender) {
  //   require(membersContributions[sender] > 0);
  //   _;
  // }

  constructor() public {
    _owner = msg.sender;
  }

      /// Create a new Cooperative Group contract
  /// @param _groupName - Name of the Cooperative
  /// @param amount - The minimum stake required to create a group

      function createCooperativeGroup(string memory _groupName, uint amount) public payable returns(bool success) {
        require(bytes(_groupName).length > 0, "The groupname's name cannot be empty!");
        
        bytes32 blockHash = blockhash(block.number - 1);
        bytes32 id = keccak256(abi.encodePacked(msg.sender, _groupName, block.timestamp, blockHash));


        groupIds.push(id);
        groupNames.push(_groupName);
    
  
        groupMembers[id].id = id;
        groupMembers[id].groupName = _groupName;
        groupMembers[id].groupCreator = _owner;
        groupMembers[id].groupMemberAddressList.push(msg.sender);
        groupMembers[id].groupCreationAmount = amount;
        groupMembers[id].groupIndex = groupIds.length - 1;
        groupMembers[id].createdTime = block.timestamp;
        groupMembers[id].groupState = GroupState.Created;

        emit GroupCreated(address(this), _groupName);
        
        return true;
    }

    //add a member to the group

    function addMember(string memory groupName) public payable returns(bool) {      
       bytes32 _addr = 0x00;
      for(uint i = 0; i < groupNames.length; i++ ){
        if(keccak256(abi.encodePacked(groupNames[i])) == keccak256(abi.encodePacked(groupName))){
           _addr =  groupIds[i];
        }
      }
       groupMembers[_addr].groupMemberAddressList.push(msg.sender);

       emit MemberJoined(msg.sender, true);

       return true;
      
    }

  //get all members count belonging to a group

  function getAllGroupMembersCount(string memory groupName) public view returns (uint256) {
        bytes32 _addr = 0x00;
      for(uint i = 0; i < groupNames.length; i++ ){
        if(keccak256(abi.encodePacked(groupNames[i])) == keccak256(abi.encodePacked(groupName))){
           _addr =  groupIds[i];
        }
      }
       return groupMembers[_addr].groupMemberAddressList.length;

  }
 
}