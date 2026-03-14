import Navbar from "./components/Navbar";

import CreateProject from "./pages/CreateProject";
import FundProject from "./components/FundProject";
import ProjectDetails from "./pages/ProjectDetails";
import VoteMilestone from "./pages/VoteMilestone";
import ApproveMilestone from "./pages/ApproveMilestone";
import ReleasePayment from "./pages/ReleasePayment";
import NFTGallery from "./pages/NFTGallery";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex">

        {/* Sidebar */}
        <div className="w-64 bg-white shadow min-h-screen p-6">

          <h2 className="font-bold text-gray-700 mb-4">
            Dashboard
          </h2>

          <ul className="space-y-3 text-gray-600">

            <li className="hover:text-indigo-600 cursor-pointer">
              Create Project
            </li>

            <li className="hover:text-indigo-600 cursor-pointer">
              Fund Project
            </li>

            <li className="hover:text-indigo-600 cursor-pointer">
              Vote Milestone
            </li>

            <li className="hover:text-indigo-600 cursor-pointer">
              Approve Milestone
            </li>

            <li className="hover:text-indigo-600 cursor-pointer">
              Release Payment
            </li>

            <li className="hover:text-indigo-600 cursor-pointer">
              NFT Gallery
            </li>

          </ul>

        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-8">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">

            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-500 text-sm">
                Total Projects
              </p>
              <p className="text-2xl font-bold">
                12
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-500 text-sm">
                Funds Locked
              </p>
              <p className="text-2xl font-bold">
                8 ETH
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-500 text-sm">
                Milestones Completed
              </p>
              <p className="text-2xl font-bold">
                24
              </p>
            </div>

          </div>

          {/* Main Components */}
          <div className="grid grid-cols-2 gap-6">

            <CreateProject />
            <FundProject />
            <VoteMilestone />
            <ApproveMilestone />
            <ReleasePayment />
            <ProjectDetails />
            <NFTGallery />

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;