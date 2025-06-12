// app/components/getEscrows.js
import { useEffect, useState } from 'react';
import { getContract } from '@/lib/getContract';
import { ethers } from 'ethers';

export default function EscrowList() {
  const [escrows, setEscrows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEscrows() {
      try {
        const contract = await getContract('MultiEscrowManager');
        const count = await contract.getEscrowCount();
        const fetched = [];

        for (let i = 0; i < count; i++) {
          const data = await contract.escrows(i);
          fetched.push({
            buyer: data.buyer,
            seller: data.seller,
            amount: ethers.formatEther(data.amount),
            deadline: new Date(Number(data.deadline) * 1000).toLocaleString(),
            completed: data.completed,
          });
        }
        setEscrows(fetched);
      } catch (err) {
        console.error('Failed to fetch escrows', err);
      } finally {
        setLoading(false);
      }
    }

    fetchEscrows();
  }, []);

  if (loading) return <p>Loading escrows...</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">All Escrows</h2>
      {escrows.length === 0 ? (
        <p>No escrows found.</p>
      ) : (
        escrows.map((escrow, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-sm bg-white dark:bg-gray-900"
          >
            <p><strong>Buyer:</strong> {escrow.buyer}</p>
            <p><strong>Seller:</strong> {escrow.seller}</p>
            <p><strong>Amount:</strong> {escrow.amount} ETH</p>
            <p><strong>Deadline:</strong> {escrow.deadline}</p>
            <p><strong>Completed:</strong> {escrow.completed ? 'Yes' : 'No'}</p>
          </div>
        ))
      )}
    </div>
  );
}
