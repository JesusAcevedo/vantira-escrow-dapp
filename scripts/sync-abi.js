// scripts/sync-abi.js
const fs = require("fs");
const path = require("path");

const sourcePath = path.resolve(
  __dirname,
  "../../compile-env/artifacts/contracts/MultiEscrowManager.sol/MultiEscrowManager.json"
);

const abiDir = path.resolve(__dirname, "../app/abi");
const abiPath = path.join(abiDir, "MultiEscrowManager.json");

if (!fs.existsSync(abiDir)) {
  fs.mkdirSync(abiDir, { recursive: true });
}

fs.copyFileSync(sourcePath, abiPath);

console.log("✅ ABI synced to /app/abi/MultiEscrowManager.json");
