import { useState } from "react";
import { createProject } from "../services/blockchain";

function CreateProject() {

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  async function handleCreate() {

    await createProject(
      [desc],
      [amount]
    );

  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-lg font-semibold mb-4">
        Create Project
      </h2>

      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Milestone Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Amount ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={handleCreate}
        className="w-full bg-indigo-600 text-white py-2 rounded"
      >
        Create Project
      </button>

    </div>
  );
}

export default CreateProject;