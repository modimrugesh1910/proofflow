// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract MilestoneFunding {

    struct Milestone {
        string description;
        uint amount;
        bool approved;
        uint voteCount;
    }

    struct Project {
        address creator;
        uint totalFunds;
        uint releasedFunds;
        Milestone[] milestones;
        mapping(address => bool) voters;
    }

    uint public projectCount;
    mapping(uint => Project) public projects;

    event ProjectCreated(uint projectId, address creator);
    event Funded(uint projectId, address funder, uint amount);
    event MilestoneApproved(uint projectId, uint milestoneId);
    event PaymentReleased(uint projectId, uint milestoneId);

    function createProject(
        string[] memory descriptions,
        uint[] memory amounts
    ) public {

        require(descriptions.length == amounts.length, "Invalid milestone data");

        Project storage project = projects[projectCount];
        project.creator = msg.sender;

        for(uint i=0;i<descriptions.length;i++){
            project.milestones.push(
                Milestone(descriptions[i], amounts[i], false, 0)
            );
        }

        emit ProjectCreated(projectCount, msg.sender);
        projectCount++;
    }

    function fundProject(uint projectId) public payable {

        require(msg.value > 0, "Send ETH");

        Project storage project = projects[projectId];
        project.totalFunds += msg.value;

        emit Funded(projectId, msg.sender, msg.value);
    }

    function voteMilestone(uint projectId, uint milestoneId) public {

        Project storage project = projects[projectId];

        require(!project.voters[msg.sender], "Already voted");

        project.milestones[milestoneId].voteCount++;
        project.voters[msg.sender] = true;
    }

    function approveMilestone(uint projectId, uint milestoneId) public {

        Project storage project = projects[projectId];
        Milestone storage milestone = project.milestones[milestoneId];

        require(!milestone.approved, "Already approved");

        milestone.approved = true;

        emit MilestoneApproved(projectId, milestoneId);
    }

    function releasePayment(uint projectId, uint milestoneId) public {

        Project storage project = projects[projectId];
        Milestone storage milestone = project.milestones[milestoneId];

        require(milestone.approved, "Milestone not approved");

        payable(project.creator).transfer(milestone.amount);

        project.releasedFunds += milestone.amount;

        emit PaymentReleased(projectId, milestoneId);
    }

    function getMilestones(uint projectId) public view returns(Milestone[] memory){
        return projects[projectId].milestones;
    }
}