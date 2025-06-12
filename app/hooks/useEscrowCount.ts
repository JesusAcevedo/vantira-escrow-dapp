import { useReadContract } from 'wagmi'
import contractAbi from '@/app/abi/MultiEscrowManager.json'
import { CONTRACT_ADDRESS } from './contractConfig'

export function useEscrowCount() {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: contractAbi.abi,
    functionName: 'getEscrowCount',
  })
}
