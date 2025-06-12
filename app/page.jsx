"use client";
import React from "react";
import CreateEscrow from "./components/CreateEscrow";
import EscrowList from "./components/EscrowList";
import { ContractProvider } from "./app/abis"; // Adjust path as needed

export default function Home() {
  return (
    <ContractProvider>
      <main className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
            Vantira Escrow
          </h1>
          <CreateEscrow />
          <div className="my-8 border-t" />
          <EscrowList />
        </div>
      </main>
    </ContractProvider>
  );
}
// This is the main entry point for the Vantira Escrow application.
// It sets up the main layout and includes the CreateEscrow and EscrowList components.
// The ContractProvider wraps the application to provide access to the smart contract context.
// The main layout is styled with Tailwind CSS for a clean and modern look.
// The CreateEscrow component allows users to create new escrow agreements,
// while the EscrowList component displays existing escrow agreements.
// The application is designed to be user-friendly and responsive, making it accessible on various devices.
// The main page is structured to provide a seamless user experience,
// with a focus on functionality and ease of use.
// The Vantira Escrow application is built using React and Tailwind CSS,
// leveraging the power of smart contracts to manage escrow agreements securely.
// The application is designed to be modular, with components separated for clarity and maintainability.
// The CreateEscrow component handles the creation of new escrow agreements,
// while the EscrowList component fetches and displays existing agreements from the blockchain.
// The ContractProvider component is used to manage the connection to the smart contract,
// ensuring that all components have access to the necessary contract functions and state.
// The application is built with a focus on performance and scalability,