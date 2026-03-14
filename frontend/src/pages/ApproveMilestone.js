import { useState } from "react";
import { approveMilestone } from "../services/blockchain";

function ApproveMilestone() {

  const [projectId, setProjectId] = useState("");
  const [milestoneId, setMilestoneId] = useState("");

  const handleApprove = async () => {

    await approveMilestone(projectId, milestoneId);

    alert("Milestone Approved!");
  };

  return (
    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-xl font-bold mb-4">
        Approve Milestone
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
        onClick={handleApprove}
        className="bg-yellow-600 text-white px-4 py-2 rounded"
      >
        Approve
      </button>

    </div>
  );
}

export default ApproveMilestone;