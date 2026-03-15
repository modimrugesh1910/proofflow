import { Link, useLocation } from "react-router-dom";
import { Home, CreditCard, Users, CheckCircle, Award } from "lucide-react";

function Sidebar() {
  const location = useLocation();
  const menu = [
    { name: "Create Project", path: "/", icon: <Home size={18} /> },
    { name: "Fund Project", path: "/fund", icon: <CreditCard size={18} /> },
    { name: "Project Details", path: "/project", icon: <Users size={18} /> },
    { name: "Vote Milestone", path: "/vote", icon: <CheckCircle size={18} /> },
    { name: "Approve Milestone", path: "/approve", icon: <CheckCircle size={18} /> },
    { name: "Release Payment", path: "/release", icon: <CreditCard size={18} /> },
    { name: "NFT Gallery", path: "/nfts", icon: <Award size={18} /> }
  ];

  return (
    <div className="fixed top-16 left-0 w-64 h-full bg-white shadow-lg p-6">
      <h2 className="font-bold text-gray-700 mb-6">DAO Dashboard</h2>
      <ul className="space-y-3">
        {menu.map((m, i) => (
          <li key={i}>
            <Link
              to={m.path}
              className={`flex items-center space-x-2 p-2 rounded hover:bg-indigo-50 hover:text-indigo-600 transition ${
                location.pathname === m.path ? "bg-indigo-50 text-indigo-600" : "text-gray-600"
              }`}
            >
              {m.icon}
              <span>{m.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
