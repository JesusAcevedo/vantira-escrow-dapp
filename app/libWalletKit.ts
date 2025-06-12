'use client';

import { Core } from '@walletconnect/core';
import { WalletKit } from '@reown/walletkit';

const core = new Core({
  projectId: '78821d7e28009048a665f96346f3a4a9',
});

const metadata = {
  name: 'Vantira',
  description: 'Escrow DApp with walletkit',
  url: 'http://localhost:3000', // ✅ replace with your deployed URL later
  icons: ['https://assets.reown.com/reown-profile-pic.png'],
};

export const initwalletkit = async () => {
  return await WalletKit.init({ core, metadata });
};
