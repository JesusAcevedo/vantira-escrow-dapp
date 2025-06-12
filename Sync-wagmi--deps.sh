#!/bin/bash
# sync-wagmi-deps.sh - Ensures wagmi deps are compatible

set -e

echo "\n🔍 Checking current wagmi, viem versions..."
npm list wagmi viem @wagmi/core || true

echo "\n⬆️ Installing wagmi@2.6.0, viem@1.4.0, @wagmi/core@1.3.0..."
npm install wagmi@2.6.0 viem@1.4.0 @wagmi/core@1.3.0

echo "\n🧹 Cleaning build cache..."
rm -rf .next
rm -f tsconfig.tsbuildinfo

echo "✅ wagmi ecosystem updated and cache cleared"
echo "Run: npm run build"
