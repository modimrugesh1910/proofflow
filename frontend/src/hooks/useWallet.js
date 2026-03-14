import { useState } from "react";
import { connectWallet } from "../services/wallet";

export function useWallet() {
  const [account, setAccount] = useState("");

  async function connect() {
    const acc = await connectWallet();
    setAccount(acc);
  }

  return { account, connect };
}