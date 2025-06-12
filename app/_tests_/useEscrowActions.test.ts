import React, { ReactNode } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { WagmiConfig } from 'wagmi';
import { config } from '../lib/wagmi';
import {
  useCreateEscrow,
  useReleaseEscrow,
  useWithdrawEscrow,
  useEscrowStatus,
} from '../hooks/useEscrowActions';

const wrapper = ({ children }: { children: ReactNode }) => (
  <WagmiConfig config={config}>{children}</WagmiConfig>
);

describe('useEscrowActions hooks', () => {
  it('should return write function for useCreateEscrow', () => {
    const { result } = renderHook(() => useCreateEscrow('1000'), { wrapper });
    expect(result.current.write).toBeDefined();
  });

  it('should return write function for useReleaseEscrow', () => {
    const { result } = renderHook(() => useReleaseEscrow('0'), { wrapper });
    expect(result.current.write).toBeDefined();
  });

  it('should return write function for useWithdrawEscrow', () => {
    const { result } = renderHook(() => useWithdrawEscrow('0'), { wrapper });
    expect(result.current.write).toBeDefined();
  });

  it('should return escrow status with useEscrowStatus', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useEscrowStatus('0'), { wrapper });
    await waitForNextUpdate();
    expect(result.current.status).toBeDefined();
  });
});
