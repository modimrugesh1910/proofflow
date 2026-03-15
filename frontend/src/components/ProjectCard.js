import ProgressBar from "./ProgressBar";
import MilestoneCard from "./MilestoneCard";

function ProjectCard({project}) {

  return (

    <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">

      <h3 className="text-lg font-bold mb-2">
        {project.name}
      </h3>

      <p className="text-gray-500 text-sm mb-4">
        {project.description}
      </p>

      <div className="mb-4">

        <div className="flex justify-between text-sm mb-1">
          <span>Funding Progress</span>
          <span>{project.progress}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">

          <div
            className="bg-indigo-600 h-2 rounded-full"
            style={{width:`${project.progress}%`}}
          />

        </div>

      </div>

      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg w-full hover:bg-indigo-700">
        View Details
      </button>

    </div>

  )
}

export default ProjectCard