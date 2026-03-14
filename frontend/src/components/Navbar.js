import WalletButton from "./WalletButton";

function Navbar() {
  return (
    <div className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + App Name */}
        <div className="flex items-center gap-2">

          {/* Logo Icon */}
          <div className="bg-indigo-600 p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L4 7v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V7l-8-5z" />
            </svg>
          </div>

          {/* App Name */}
          <h1 className="text-xl font-bold">
            <span className="text-indigo-600">Proof</span>
            <span className="text-gray-800">Flow</span>
          </h1>
        </div>

        <WalletButton />

      </div>
    </div>
  );
}

export default Navbar;