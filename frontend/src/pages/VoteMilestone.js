import { useState } from "react";
import { voteMilestone } from "../services/blockchain";

function VoteMilestone() {

  const [projectId, setProjectId] = useState("");
  const [milestoneId, setMilestoneId] = useState("");

  const handleVote = async () => {

    await voteMilestone(projectId, milestoneId);

    alert("Vote submitted!");
  };

  return (
    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-xl font-bold mb-4">
        Vote Milestone
      </h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Project ID"
        value={projectId}
        onChange={(e) => setProjectId(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        placeholder="Milestone ID"
        value={milestoneId}
        onChange={(e) => setMilestoneId(e.target.value)}
      />

      <button
        onClick={handleVote}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Vote
      </button>

    </div>
  );
}

export default VoteMilestone;