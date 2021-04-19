// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;



import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract LiteSwapDAO1 is Ownable {


  using SafeMath for uint;

    //Group Basic info
     string public groupName;
     address public groupCreator;
     uint public groupBalance;
     address[] public groupMemberAddress;

     address public groupAccountNumber;
     uint groupCreationAmount;  

     uint public createdTime;

     enum GroupState{ Created, Updated, Deleted }

     GroupState public groupState;

     mapping(address => uint) public membersContributions;

     address[] public members;

     event MemberJoined( address indexed member);

     event MemberAddedFund ( address indexed member);

      modifier memberHasContributed(address sender) {
    require(membersContributions[sender] > 0);
    _;
  }

    /// Create a new LotteryPot contract
  /// @param _groupName - Name of the Cooperative
  /// @param _groupCreationAmount - The minimum stake required to create a group

  constructor (
    string memory _groupName,
    uint _groupCreationAmount

  )
    public payable
  {
    // require(_groupCreationAmount > 0, "The minimum fund has to be greater than 0.");
    // require(msg.value >= _groupCreationAmount);

    groupName = _groupName;
    createdTime = block.timestamp;
    groupBalance = 0;
    groupCreator = msg.sender;
    groupCreationAmount = _groupCreationAmount;

    // Group creation should be called from its factory.
    groupAccountNumber = msg.sender;
    groupBalance = 0;
    groupState = GroupState.Created;

    // Transfer ownership to the owner, because it defaults to msg.sender
    //   by OpenZeppelin
    // if (_groupCreator!= msg.sender) {
    //   transferOwnership(_owner);
    // }
  }

  //allow members to contribute
  function contribute(uint amount) public {
    groupBalance.add(amount);
  }
}