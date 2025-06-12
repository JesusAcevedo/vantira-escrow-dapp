// scripts/syncAbiToDapp.js
const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "../realty-abi-bundle.json");
const destination = path.join(__dirname, "../../vantira-escrow-dapp/app/abi/realty-abi-bundle.json");

fs.copyFileSync(source, destination);
console.log(`✅ Synced ABI to: ${destination}`);
