'use client'

import { useState } from 'react'
import { useEscrowCount } from '@/app/hooks/useEscrowCount'
import { useCreateEscrow } from '@/app/hooks/useEscrowActions'

export default function EscrowDashboard() {
  const [amount, setAmount] = useState('')
  const { write, isPending, isSuccess, error } = useCreateEscrow(amount)
  const { data: count, isLoading, isError } = useEscrowCount()

  const handleSubmit = async () => {
    if (!write) return
    try {
      await write()
    } catch (err) {
      console.error('Transaction failed:', err)
    }
  }

  return (
    <main className="p-6 space-y-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Escrow Dashboard</h1>

      {isLoading ? (
        <p>Loading count...</p>
      ) : isError ? (
        <p className="text-red-500">Error loading count</p>
      ) : (
        <p>Total Escrows: {count?.toString()}</p>
      )}

      <div className="mt-6 space-y-2">
        <label className="block text-sm font-medium">Create New Escrow (ETH)</label>
        <input
          type="number"
          step="0.01"
          className="border p-2 w-full rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in ETH"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={!write || isPending}
        >
          {isPending ? 'Creating...' : 'Create Escrow'}
        </button>
        {isSuccess && <p className="text-green-600">✅ Escrow created!</p>}
        {error && <p className="text-red-500">Error: {(error as any).message}</p>}
      </div>
    </main>
  )
}
