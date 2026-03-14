import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <CreateProject />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;