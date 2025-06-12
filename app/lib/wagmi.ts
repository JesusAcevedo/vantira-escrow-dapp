import { createConfig, http } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { createPublicClient } from 'viem';

const publicClient = createPublicClient({
  chain: goerli,
  transport: http(process.env.NEXT_PUBLIC_RPC_URL!),
});

export const config = createConfig({
  autoConnect: true,
  publicClient,
});
