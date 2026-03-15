import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

import CreateProject from "./pages/CreateProject";
import FundProject from "./components/FundProject";
import ProjectDetails from "./pages/ProjectDetails";
import VoteMilestone from "./pages/VoteMilestone";
import ApproveMilestone from "./pages/ApproveMilestone";
import ReleasePayment from "./pages/ReleasePayment";
import NFTGallery from "./pages/NFTGallery";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />

      <div className="ml-64 mt-16 p-8 bg-gray-100 min-h-screen">
        <Hero />
        <Stats />

        <div className="mt-6">
          <Routes>
            <Route path="/" element={<CreateProject />} />
            <Route path="/fund" element={<FundProject />} />
            <Route path="/project" element={<ProjectDetails />} />
            <Route path="/vote" element={<VoteMilestone />} />
            <Route path="/approve" element={<ApproveMilestone />} />
            <Route path="/release" element={<ReleasePayment />} />
            <Route path="/nfts" element={<NFTGallery />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
