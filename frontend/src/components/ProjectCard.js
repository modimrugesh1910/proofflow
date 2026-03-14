import ProgressBar from "./ProgressBar";
import MilestoneCard from "./MilestoneCard";

function ProjectCard() {
  return (
    <div className="bg-white rounded-xl shadow p-4">

      <h3 className="font-bold text-lg">
        Decentralized Marketplace
      </h3>

      <p className="text-gray-500">
        Funding: 2 / 5 ETH
      </p>

      <ProgressBar progress={40} />

      <button className="mt-3 bg-green-500 text-white px-3 py-1 rounded">
        Fund
      </button>

      <MilestoneCard />

    </div>
  );
}

export default ProjectCard;