// app/hooks/useContracts.js

import { useMemo } from "react";
import { getContracts } from "../lib/contracts";
import { useSigner } from "wagmi";

export default function useContracts() {
  const { data: signer } = useSigner();

  const contracts = useMemo(() => {
    if (!signer) return null;
    return getContracts(signer);
  }, [signer]);

  return contracts;
}
