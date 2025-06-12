import { Core } from '@walletconnect/core';
import { WalletKit } from '@reown/walletkit';
// Importing the WalletKit from @reown/walletkit package
// This package provides the WalletKit functionality for connecting to wallets

const core = new Core({
  projectId: '78821d7e28009048a665f96346f3a4a9',
});

const metadata = {
  name: 'Vantira',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit',
  icons: ['https://assets.reown.com/reown-profile-pic.png'],
};

// Define the shape of the WalletKit instance
export interface WalletKitInstance {
  connect: () => Promise<{ accounts: string[] }>;
  // add other methods here if needed
}

export async function initWalletKit(): Promise<WalletKitInstance> {
  return await WalletKit.init({ core, metadata }) as unknown as WalletKitInstance;
}
