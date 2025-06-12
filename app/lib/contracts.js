// app/lib/contracts.js

import { ethers } from "ethers";
import {
  Crowdfunding,
  DisputeResolution,
  FractionalOwnership,
  IdentityVerification,
  Lease,
  Mortgage,
  PropertyManagement,
  SalesEscrow,
  TitleRegistry,
  MultiEscrowManager,
} from "../abi/index";

// Deployed mainnet addresses
const addresses = {
  Crowdfunding: "0x8B8A2f49Bf97DE72c9D376ED967EB4a6BB7b78Ed",
  DisputeResolution: "0x437cba2432c4984276d2da136ef7F4Cd76515F1d",
  FractionalOwnership: "0xd5cddf2dD2fCEBc103B9Cc1FBa186bA267e17454",
  IdentityVerification: "0xREPLACE_THIS",
  Lease: "0xBF59DB036c389d24c10267e07735A7F88F253EaB",
  Mortgage: "0xc495b1F328B601550190930b67e4bd7435a5Da03",
  PropertyManagement: "0xREPLACE_THIS",
  SalesEscrow: "0xREPLACE_THIS",
  TitleRegistry: "0xREPLACE_THIS",
  MultiEscrowManager: "0xREPLACE_THIS",
};

// Load from browser wallet
export const getContracts = (providerOrSigner) => ({
  crowdfunding: new ethers.Contract(addresses.Crowdfunding, Crowdfunding, providerOrSigner),
  disputeResolution: new ethers.Contract(addresses.DisputeResolution, DisputeResolution, providerOrSigner),
  fractionalOwnership: new ethers.Contract(addresses.FractionalOwnership, FractionalOwnership, providerOrSigner),
  identityVerification: new ethers.Contract(addresses.IdentityVerification, IdentityVerification, providerOrSigner),
  lease: new ethers.Contract(addresses.Lease, Lease, providerOrSigner),
  mortgage: new ethers.Contract(addresses.Mortgage, Mortgage, providerOrSigner),
  propertyManagement: new ethers.Contract(addresses.PropertyManagement, PropertyManagement, providerOrSigner),
  salesEscrow: new ethers.Contract(addresses.SalesEscrow, SalesEscrow, providerOrSigner),
  titleRegistry: new ethers.Contract(addresses.TitleRegistry, TitleRegistry, providerOrSigner),
  multiEscrowManager: new ethers.Contract(addresses.MultiEscrowManager, MultiEscrowManager, providerOrSigner),
});
