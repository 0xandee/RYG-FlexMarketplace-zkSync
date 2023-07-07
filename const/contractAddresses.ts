/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { ZksyncEraTestnet } from "@thirdweb-dev/chains";
export const NETWORK = ZksyncEraTestnet;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x1cE44c56aa7824bc8A98ECd74b95970C6113E8Cc";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x07bA50eed51E415a81dB363f7Ba96c8119e2B72e";

// 4. Set up the URL of where users can view transactions on
export const ETHERSCAN_URL = "https://goerli.explorer.zksync.io/";
