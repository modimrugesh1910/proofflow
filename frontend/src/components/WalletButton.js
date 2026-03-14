import { useWallet } from "../hooks/useWallet";

function WalletButton() {
  const { account, connect } = useWallet();

  return (
    <button
      onClick={connect}
      className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
    >
      {account ? account.slice(0, 6) + "..." : "Connect Wallet"}
    </button>
  );
}

export default WalletButton;