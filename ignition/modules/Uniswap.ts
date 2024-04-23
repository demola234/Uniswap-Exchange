import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SwapModule = buildModule("SwapModule", (m) => {
  const swap = m.contract("SingleSwap");

  return { swap };
});

export default SwapModule;
