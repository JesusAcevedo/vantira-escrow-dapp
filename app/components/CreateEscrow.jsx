"use client";
import React, { useState } from "react";
import { ethers } from "ethers";
import { getContract } from "../utils/getContract";

const CreateEscrowForm = () => {
  const [form, setForm] = useState({
    buyer: "",
    seller: "",
    amount: "",
    deadline: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus("Submitting...");
      const contract = await getContract();
      const tx = await contract.createEscrow(
        form.buyer,
        form.seller,
        ethers.parseEther(form.amount),
        Math.floor(new Date(form.deadline).getTime() / 1000)
      );
      await tx.wait();
      setStatus("✅ Escrow created successfully!");
      setForm({ buyer: "", seller: "", amount: "", deadline: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Error creating escrow");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold text-gray-700">Create New Escrow</h2>

      <div>
        <label className="block text-sm font-medium">Buyer Address</label>
        <input
          type="text"
          name="buyer"
          value={form.buyer}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Seller Address</label>
        <input
          type="text"
          name="seller"
          value={form.seller}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Amount (ETH)</label>
        <input
          type="number"
          step="0.01"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Deadline</label>
        <input
          type="datetime-local"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Create Escrow
      </button>

      {status && <p className="text-sm text-gray-600">{status}</p>}
    </form>
  );
};

export default CreateEscrowForm;
