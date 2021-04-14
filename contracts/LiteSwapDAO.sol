// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.8.0;

import "./interfaces/ILiteSwapDAO.sol";

contract LiteSwapDAO {

    uint public  groupCount = 0;

    address public owner;

 //structure to hold the group created
   
    struct LiteSwapGroup {
        string groupName;
        address groupCreator;
        uint groupBalance;
        address[] liteSwapGroupMembers;
        uint _groupIndex;  
    }

    LiteSwapGroup ltsTypeOf;

    address[] liteSwapGroupId;

    mapping(address => LiteSwapGroup) public liteSwapGroupMap;

    event LTSGroupCreated(address groupAddress);

    constructor() public {
        owner = msg.sender;
    }

    //add members to group
     function createLTSGroup(string calldata gName) external{
         address groupAddress = address(this);
         liteSwapGroupMap[groupAddress].groupName = gName;
         liteSwapGroupMap[groupAddress].groupCreator = owner;
         liteSwapGroupMap[groupAddress].groupBalance = 0;
         liteSwapGroupMap[groupAddress].liteSwapGroupMembers.push(owner);
         liteSwapGroupMap[groupAddress]._groupIndex = liteSwapGroupId.length - 1;

         liteSwapGroupId.push(groupAddress);

         emit LTSGroupCreated(groupAddress);
         
         
     }

    /**
     * @dev Add memebers who selected group to group
     */

    function addMembersToLTSGroup(address groupAddress, uint256 groupInitialDues) external returns(bool){
   if(checkIfMemberAlreadyExist(groupAddress)) return false;
        liteSwapGroupMap[groupAddress].groupBalance += groupInitialDues;
        liteSwapGroupMap[groupAddress].liteSwapGroupMembers.push(msg.sender);
        return true;
        
    }

    /**
     * @dev get all the groups
     */
  
    function checkIfMemberAlreadyExist(address group_addr) public view returns (bool) {
        address[] memory groupMembers = liteSwapGroupMap[group_addr].liteSwapGroupMembers;
        if(groupMembers.length == 0)
        return false;
        for(uint i = 0; i < groupMembers.length; i++ ){
            if(groupMembers[i] == msg.sender) {
                return true;
            }
        }
    }

    /**
     * @dev get all the groups
     */

    function getGroupCount() public view returns (uint256){
        return liteSwapGroupId.length;
    }

}