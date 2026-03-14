import { useState } from "react";
import { createProject } from "../services/blockchain";

function CreateProject() {

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleCreate = async () => {

    const descriptions = [description];
    const amounts = [amount];

    await createProject(descriptions, amounts);

    alert("Project Created!");
  };

  return (
    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-xl font-bold mb-4">
        Create Project
      </h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Milestone description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        placeholder="Milestone amount (ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={handleCreate}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Create
      </button>

    </div>
  );
}

export default CreateProject;