// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.4;

contract Election {
    //Model a candidate
    struct Candidate {
        uint   id;
        string name;
        uint   voteCount;
    }


    // Store accounts which have voted
    mapping(address => bool) public voters;
    // Store Candidates
    // Fetch Candidate
    mapping(uint => Candidate) public candidates;
    // Store Candidate Count
    uint public candidatesCount;    
    
    // voted event
    event VotedEvent (
        uint indexed _candidateId
        );

    // Constructor
    constructor()  {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate(string memory _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote (uint _candidateId) public {
        // require that address hasn't voted before
        require(!voters[msg.sender] , "address must hasn't voted before");

        // require vote only for valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount , "vote only for valid candidate");

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote count
        candidates[_candidateId].voteCount ++;

        // trigger vote event
        emit VotedEvent(_candidateId);
    }

    function getCandidates() public view returns(Candidate[] memory) {
    Candidate[] memory items = new Candidate[](candidatesCount);
    uint currentIndex = 0;
      for (uint i = 0; i < candidatesCount; i++) {
        uint currentId = i + 1;
        Candidate storage currentItem = candidates[currentId];
        items[currentIndex] = currentItem;
        currentIndex += 1;
      
    }
    return items;
    }
}