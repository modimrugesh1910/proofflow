// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MilestoneNFT is ERC721, Ownable {

    uint public tokenId;

    constructor() ERC721("MilestoneAchievement", "MILE") {}

    function mint(address to) public onlyOwner {

        tokenId++;

        _mint(to, tokenId);
    }
}