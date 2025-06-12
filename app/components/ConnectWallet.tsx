'use client';

import { useEffect, useState } from 'react';
import { initWalletKit, WalletKitInstance } from '../lib/WalletKit';

export default function ConnectWallet() {
  const [walletKit, setWalletKit] = useState<WalletKitInstance | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const kit = await initWalletKit();
      setWalletKit(kit);
    })();
  }, []);

  const connect = async () => {
    if (!walletKit) return;
    const session = await walletKit.connect();
    const userAddress = session.accounts[0];
    setAddress(userAddress);
    console.log('Connected address:', userAddress);
  };

  return (
    <div>
      <button onClick={connect}>
        {address ? `Connected: ${address.slice(0, 6)}...` : 'Connect Wallet'}
      </button>
    </div>
  );
}
