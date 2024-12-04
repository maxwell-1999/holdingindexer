import { index, onchainTable, primaryKey, relations } from "@ponder/core";

export const account = onchainTable("account", (t) => ({
  address: t.hex().primaryKey(),
  fsBLPBalance: t.bigint().notNull().default(0n),
}));
