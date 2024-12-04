import { createConfig } from "@ponder/core";
import { http } from "viem";
import { erc20ABI } from "./abis/erc20ABI";
import { vesterAbi } from "./abis/ABI";

export default createConfig({
  networks: {
    arbitrum: {
      chainId: 42161,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    BFR: {
      network: "arbitrum",
      abi: erc20ABI,
      address: "0x7d1d610Fe82482412842e8110afF1cB72FA66bc8",
      startBlock: 25921230,
      // endBlock: 25921230,
    },
  },
});
