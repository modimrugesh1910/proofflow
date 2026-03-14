import { useState } from "react";
import { releasePayment } from "../services/blockchain";

function ReleasePayment() {

  const [projectId, setProjectId] = useState("");
  const [milestoneId, setMilestoneId] = useState("");

  const handleRelease = async () => {

    await releasePayment(projectId, milestoneId);

    alert("Payment Released!");
  };

  return (
    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-xl font-bold mb-4">
        Release Payment
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
        onClick={handleRelease}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Release Payment
      </button>

    </div>
  );
}

export default ReleasePayment;