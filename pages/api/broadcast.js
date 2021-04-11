import {
  sponsorTransaction,
  BufferReader,
  deserializeTransaction,
  broadcastTransaction,
} from "@stacks/transactions";
import { StacksTestnet, StacksMainnet } from "@stacks/network";
const BigNum = require("bn.js");

export default async (req, res) => {
  const { txRaw } = req.query;
  const txBuffer = Buffer.from(txRaw.replace(/^0x/, ""), "hex");
  const deserializedTx = deserializeTransaction(new BufferReader(txBuffer));
  const sponsorKey = process.env.SPONSOR_PRIVATE_KEY;
  const fee = new BigNum(1000);

  const sponsorOptions = {
    transaction: deserializedTx,
    sponsorPrivateKey: sponsorKey,
    fee,
  };

  const sponsoredTx = await sponsorTransaction(sponsorOptions);

  // for mainnet, use `StacksMainnet()`
  const network = new StacksTestnet();
  const resp = await broadcastTransaction(sponsoredTx, network);

  res.status(200).json({
    txid: resp,
  });
};