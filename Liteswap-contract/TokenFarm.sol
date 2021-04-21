pragma solidity ^0.6.0;
// Import contracts for both Dapp and DAI token.
import "./DaiToken.sol";
import "./LiteswapToken.sol";


contract TokenFarm{
    string public name = "Liteswap Token Farm";
    LiteswapToken public liteswapToken;
    DaiToken public daiToken;
    address public owner;

    mapping(address=>uint) public stakingBalance;
    mapping(address=>bool) public hasStaked;
    mapping(address=>bool) public isStaking;

    address[] public staker;

    constructor (DaiToken _DaiToken, LiteswapToken _LiteswapToken) public{
        liteswapToken = _LiteswapToken;
        daiToken = _DaiToken;
        owner = msg.sender; // address of the owner of the contract
    }
    
    // @param _amount The amount of the tokens you want to stake.
    function stakeToken(uint _amount) public {
        
        // check, amount should be greater than zero. There should be some tokens to be staked.
        require(_amount>0,"amount need to be more than 0");         
        
       
        // @param _amount, the amount of tokens you want to stake .
        daiToken.transferFrom(msg.sender, address(this), _amount); 
        
        // The balance of the owner of the contract, after staking the coins.
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;
        
        if(!hasStaked[msg.sender]){
            staker.push(msg.sender);
        }
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }
       
       
       //require checks if the condition is true, thows the exceptionotherwise 'trader is not owner'.
       //if the require condition is true, then all the tokens that are staked, are unstaked .
    function unstakeToken() public {
        require(isStaking[msg.sender] == true,"You have nothing to unstake.");
        uint balance = stakingBalance[msg.sender];
        stakingBalance[msg.sender] = 0;
        daiToken.transfer(msg.sender,balance);
        isStaking[msg.sender] = false;
    }
   //@param _owner is the address of the owner which is msg.sender
   // returns the staking balance
    function stakeAmount(address _owner) public view returns(uint) {
        return stakingBalance[_owner];
    }
// 
    function issusToken() public {
        require(msg.sender==owner,"trader is not owner");
        for(uint i=0; i<staker.length;i++){
            address recipient = staker[i];
            if(isStaking[recipient] == true){
                uint balance = stakingBalance[recipient];
                liteswapToken.transfer(recipient, balance);
            }
        }
    }

}