// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;


import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./interfaces/ILiteswapToken.sol";
import "./LiteswapToken.sol";


contract LiteSwapDAO1 is Ownable, LiteswapToken{


  using SafeMath for uint;

    //Group Basic info

    address _owner;

    struct MemberDetails {
      uint contributions;
      MemberState member_status;
      uint joinedAt;
      uint indexedAt;
    }


    struct GroupDetails {
     bytes32 id;
     string  groupName;
     address groupCreator;
     address groupAddress;
     address[] groupMemberAddressList;
     mapping(address => MemberDetails) memberList;
     uint  groupBalance;
     uint groupCreationAmount;  
     uint groupIndex;
     uint createdTime;
     GroupState groupState;
    }
  

     enum GroupState {Created, Updated, Deleted}

     enum MemberState {Active, Suspended, Deleted, Added}

     GroupState public groupState;

     MemberState public memberState;

     mapping(address => uint) public membersContributions;

     mapping(bytes32 => GroupDetails) public groupMembers;

     mapping(bytes32 => bool) private isGroupExist;

     bytes32[] private groupIds;
     string[] public groupNames;
     address[] public groupMemberList;

     event GroupCreated(address indexed addr, string groupName);

     event MemberJoined(address indexed member, bool joined);

     event MemberAddedFund(address indexed member);

     modifier onlyCreator{
       require(_owner == owner());
       _;
     }
     



  //     modifier memberHasContributed(address sender) {
  //   require(membersContributions[sender] > 0);
  //   _;
  // }

  constructor() public {
    _owner = owner();



  }

      /**
      * @notice Create a new Cooperative Group contract
      * @dev function should create a cooperative
      * @param _groupName - Name of the Cooperative
      * @param amount - The minimum stake required to create a group
       */ 
      
      function createCooperativeGroup(
        string memory _groupName, 
        uint amount) 
        public payable 
        onlyCreator 
        returns(bool success) {
          
        require(bytes(_groupName).length > 0, "The groupname's name cannot be empty!");
        require(checkGroupAddress(_groupName) == false, "Group already exist");
        require(balances[_owner] > 0 && _owner == address(0));
        require(amount > 0,"amount need to be more than 0");    

        
        bytes32 blockHash = blockhash(block.number - 1);
        bytes32 id = keccak256(abi.encodePacked(_owner, _groupName, block.timestamp, blockHash));


        groupIds.push(id);
        groupNames.push(_groupName);
    
  
        groupMembers[id].id = id;
        groupMembers[id].groupName = _groupName;
        groupMembers[id].groupCreator = _owner;
        groupMembers[id].groupAddress = address(this);
        groupMembers[id].groupMemberAddressList.push(_owner);
        groupMembers[id].memberList[_owner] = MemberDetails(amount, MemberState.Added, block.timestamp, groupMembers[id].groupMemberAddressList.length - 1);
        groupMembers[id].groupBalance = amount;
        groupMembers[id].groupCreationAmount = amount;
        groupMembers[id].groupIndex = groupIds.length - 1;
        groupMembers[id].createdTime = block.timestamp;
        groupMembers[id].groupState = GroupState.Created;

        balances[_owner] -= amount;
        balances[groupMembers[id].groupAddress] += amount;

        // transferFrom(_owner, groupMembers[id].groupAddress, amount); 

         membersContributions[_owner] += amount;
         isGroupExist[id] = true;

        emit GroupCreated(groupMembers[id].groupAddress, _groupName);
        
        return true;
    }

   
    /**
    * @notice register a new member to the cooperative
    * @param groupName the name of the group the new member want to belong to
    */

    function addMember(string memory groupName) public payable returns(bool) {   


       bytes32 _addr = 0x00;
      for(uint i = 0; i < groupNames.length; i++ ){
        if(keccak256(abi.encodePacked(groupNames[i])) == keccak256(abi.encodePacked(groupName))){
           _addr =  groupIds[i];
        }
      }
       uint addingFee = groupMembers[_addr].groupCreationAmount;   
      // require(balances[msg.sender] > addingFee, "No sufficient Fund!" );

       groupMembers[_addr].groupMemberAddressList.push(msg.sender);
       groupMembers[_addr].memberList[msg.sender] = MemberDetails(addingFee, MemberState.Added, block.timestamp,  groupMembers[_addr].groupMemberAddressList.length - 1);

       balances[msg.sender] -= addingFee;
       balances[groupMembers[_addr].groupAddress] += addingFee;

       groupMembers[_addr].groupBalance += addingFee;

      // transferFrom(msg.sender, groupMembers[_addr].groupAddress, addingFee); 

       emit MemberJoined(msg.sender, true);

       return true;
      
    }

  /**
  * @notice get all members count belonging to a group
  * @param groupName the name of the group total member count 
  */

  function getAllGroupMembersCount(string memory groupName) public view returns (uint256) {
        bytes32 _addr = 0x00;
      for(uint i = 0; i < groupNames.length; i++ ){
        if(keccak256(abi.encodePacked(groupNames[i])) == keccak256(abi.encodePacked(groupName))){
           _addr =  groupIds[i];
        }
      }
       return groupMembers[_addr].groupMemberAddressList.length;

  }

  //get all cooperative names
  function getCooperativeNames() public view returns (string[] memory){
    return groupNames;
  }

  //return group members contribution
  function getMemberContributions(address member) public view returns (uint) {
    require(getMemberAddress(member) == true);
    return membersContributions[member];
  }


  /**
  * @notice return members account address
  * @param member get memebr address
  */
  function getMemberAddress(address member) public view returns (bool){
     for(uint i = 0;  i < groupMemberList.length; i++){
       if(keccak256(abi.encodePacked(groupMemberList[i])) == keccak256(abi.encodePacked(member))){
         return true;
       }
     }

     return false;
  }

  /**
  * @notice check if group address is in array
  * @param groupName get name to check
   */

   function checkGroupAddress(string memory groupName) public view returns (bool) {
       bytes32 _addr = 0x00;
       for(uint i = 0;  i < groupNames.length; i++){
       if(keccak256(abi.encodePacked(groupNames[i])) == keccak256(abi.encodePacked(groupName))){
         _addr = groupIds[i];
         if(isGroupExist[_addr] == true){
           return true; 
         }
                
         
       }
     }

     return false;
   }
  
 
}