import { useMemo } from 'react';
import { useContractWrite, useContractRead } from 'wagmi';
import { escrowAbi, escrowAddress } from '../constants/contractAddress';

export function useCreateEscrow(amount: string) {
  const parsedAmount = useMemo(() => {
    const num = Number(amount);
    return isNaN(num) ? BigInt(0) : BigInt(num);
  }, [amount]);

  const result = useContractWrite({
    address: escrowAddress as `0x${string}`,
    abi: escrowAbi,
    functionName: 'createEscrow',
    args: [parsedAmount],
  });

  return result;
}

export function useReleaseEscrow(id: string) {
  return useContractWrite({
    address: escrowAddress as `0x${string}`,
    abi: escrowAbi,
    functionName: 'releaseFunds',
    args: [id],
  });
}

export function useWithdrawEscrow(id: string) {
  return useContractWrite({
    address: escrowAddress as `0x${string}`,
    abi: escrowAbi,
    functionName: 'refundBuyer',
    args: [id],
  });
}

export function useEscrowStatus(id: string) {
  return useContractRead({
    address: escrowAddress as `0x${string}`,
    abi: escrowAbi,
    functionName: 'escrows',
    args: [id],
    enabled: !!id,
    watch: true,
  });
}
