import CreateEscrow from "./components/CreateEscrow";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Vantira Escrow DApp</h1>
      <CreateEscrow />
    </main>
  );
}
