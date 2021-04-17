// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "./interfaces/ILiteSwapDAO.sol";
import "./LTSERC20.sol";

contract LiteSwapDAO is LTSERC20{

    uint public  groupCount = 0;

    uint private groundAccountBalance = 0;

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


    string[] allGroupNames;

    mapping(address => LiteSwapGroup) public liteSwapGroupMap;

    event LTSGroupCreated(address groupAddress);

    constructor() LTSERC20() public{
        owner = msg.sender;
        // _balances[address(this)] = groundAccountBalance;
    }

    //add members to group
     function createLTSGroup(string calldata gName) external{
         address groupAddress = address(this);
         liteSwapGroupMap[groupAddress].groupName = gName;
         liteSwapGroupMap[groupAddress].groupCreator = owner;
         liteSwapGroupMap[groupAddress].groupBalance = groundAccountBalance;
         liteSwapGroupMap[groupAddress].liteSwapGroupMembers.push(owner);
         liteSwapGroupMap[groupAddress]._groupIndex = liteSwapGroupId.length - 1;

         liteSwapGroupId.push(groupAddress);
         allGroupNames.push(gName);

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
        if(groupMembers.length == 0){
           return false;  
        }
       
        for(uint i = 0; i < groupMembers.length; i++ ){
            if(groupMembers[i] == msg.sender) {
                return true;
            }
        }
    }


    /**
     * @dev Add funds to the group
     */
    
     function addLiquidityToLTSGroupAccount(
         address payable groupAddr, 
         uint256 amount) external returns (bool, uint256){
             
        //  require(member.balance <= amount, "No Sufficient Fund!");
        //  require((member == address(0)), "No Valid Account Found");

            // _balances[msg.sender] -= amount;
            // _balances[groupAddr] += amount;
            // liteSwapGroupMap[groupAddr].groupBalance = _balances[groupAddr];

            
        }

    /**
     * @dev get all the groups
     */

    function getGroupCount() public view returns (uint256){
        return liteSwapGroupId.length;
    }

    // fallback()external payable {
    //     require(msg.value == 0);
    // }

}