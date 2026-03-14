function MilestoneCard() {
  return (
    <div className="mt-4 space-y-2">

      <div className="flex justify-between border p-2 rounded">
        <span>Build MVP</span>
        <button className="bg-blue-500 text-white px-2 rounded">
          Vote
        </button>
      </div>

      <div className="flex justify-between border p-2 rounded">
        <span>Deploy Smart Contract</span>
        <button className="bg-purple-500 text-white px-2 rounded">
          Release
        </button>
      </div>

    </div>
  );
}

export default MilestoneCard;