import WalletButton from "./WalletButton";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-16 bg-gradient-to-r from-indigo-600 to-purple-600 shadow z-50 flex items-center px-6 justify-between">
      <div className="flex items-center space-x-3">
        <div className="bg-white text-indigo-600 font-bold w-8 h-8 flex items-center justify-center rounded-lg">
          PF
        </div>
        <h1 className="text-white text-xl font-bold">ProofFlow</h1>
      </div>
      <WalletButton />
    </nav>
  );
}

export default Navbar;
