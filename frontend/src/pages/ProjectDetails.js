import { useState } from "react";
import { getMilestones } from "../services/blockchain";

function ProjectDetails() {

  const [projectId, setProjectId] = useState("");
  const [milestones, setMilestones] = useState([]);

  const loadProject = async () => {

    const data = await getMilestones(projectId);

    setMilestones(data);
  };

  return (
    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-xl font-bold mb-4">
        Project Details
      </h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Project ID"
        value={projectId}
        onChange={(e) => setProjectId(e.target.value)}
      />

      <button
        onClick={loadProject}
        className="bg-indigo-600 text-white px-4 py-2 rounded mb-4"
      >
        Load Project
      </button>

      {milestones.map((m, i) => (
        <div
          key={i}
          className="border p-3 mb-2 rounded"
        >
          <p><b>Description:</b> {m.description}</p>
          <p><b>Amount:</b> {m.amount.toString()}</p>
          <p><b>Votes:</b> {m.voteCount.toString()}</p>
          <p>
            <b>Status:</b> {m.approved ? "Approved" : "Pending"}
          </p>
        </div>
      ))}

    </div>
  );
}

export default ProjectDetails;