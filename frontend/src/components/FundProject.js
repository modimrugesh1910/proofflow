import { useState } from "react";
import { fundProject } from "../services/blockchain";

function FundProject() {

  const [projectId, setProjectId] = useState("");
  const [amount, setAmount] = useState("");

  const handleFund = async () => {

    await fundProject(projectId, amount);

    alert("Funding successful");
  };

  return (
    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-xl font-bold mb-4">
        Fund Project
      </h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Project ID"
        value={projectId}
        onChange={(e) => setProjectId(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        placeholder="Amount (ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={handleFund}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Fund
      </button>

    </div>
  );
}

export default FundProject;