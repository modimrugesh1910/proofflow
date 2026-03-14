import ProjectCard from "../components/ProjectCard";

function Dashboard() {
  return (
    <div>

      <h2 className="text-xl font-bold mb-4">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard />
        <ProjectCard />
      </div>

    </div>
  );
}

export default Dashboard;