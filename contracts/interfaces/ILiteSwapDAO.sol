// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ILiteSwapDAO {


    
    /**
     * @dev create initial liquidity group by name.
     
     */
    function createLTSGroup(string calldata  groupName) external;

        
    /**
     * @dev Add memebers who selected group to group
     */

    function addMembersToLTSGroup(address payable member, uint256 groupInitialDues) external returns(bool);

      /**
     * @dev check If Member Already Exist
     */

    function checkIfMemberAlreadyExist(address group_addr) external returns(bool);

          
    /**
     * @dev Add funds to the group
     */
    

    function addLiquidityToLTSGroupAccount(address payable groupAddr, uint256 amount) external returns (bool, uint256);
          
    /**
     * @dev get group total suppy
     */

    function getLTSGroupTotalLiquidity(uint256 totalAmount) external view returns (uint);

          
    /**
     * @dev allow group to aprove withdraw
     */

    function withdrawFundFromLTSGroupAccount(uint256 amount, address authorised) external returns (uint256);

          
    /**
     * @dev remove member from group
     */

    function removeAmemberFromGroup(address memberToremove) external returns (bool);


  /**
     * @dev remove member from group
     */
     function getGroupCount() external view returns (uint256);
}