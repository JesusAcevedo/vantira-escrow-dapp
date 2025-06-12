// app/abi/index.js

import realtyBundle from "../../public/realty-abi-bundle.json";

export const ABIs = {
  Crowdfunding: realtyBundle["Crowdfunding"],
  DisputeResolution: realtyBundle["DisputeResolution"],
  FractionalOwnership: realtyBundle["FractionalOwnership"],
  IdentityVerification: realtyBundle["IdentityVerification"],
  Lease: realtyBundle["Lease"],
  Mortgage: realtyBundle["Mortgage"],
  PropertyManagement: realtyBundle["PropertyManagement"],
  SalesEscrow: realtyBundle["SalesEscrow"],
  TitleRegistry: realtyBundle["TitleRegistry"],
  MultiEscrowManager: realtyBundle["MultiEscrowManager"],
};

// Optionally, named exports
export const {
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
} = ABIs;
