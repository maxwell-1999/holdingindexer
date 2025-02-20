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
      address: "0x1a5b0aaf478bf1fda7b934c76e7692d722982a6d",
      startBlock: 25921230,
      endBlock: 297628091,
    },
    Vester1: {
      network: "arbitrum",
      abi: vesterAbi,
      address: "0x92f424a2A65efd48ea57b10D345f4B3f2460F8c8",
      startBlock: 26783253,
      endBlock: 297628091,
    },
    Vester2: {
      network: "arbitrum",
      abi: vesterAbi,
      address: "0xF454b87b3DbE726157173A331234fE2d353DB0Dc",
      startBlock: 274702656,
      endBlock: 297628091,
    },
    esBFR: {
      network: "arbitrum",
      abi: erc20ABI,
      address: "0x92914A456EbE5DB6A69905f029d6160CF51d3E6a",
      startBlock: 26783085,
      endBlock: 297628091,
    },
  },
});
