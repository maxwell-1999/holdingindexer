import { index, onchainTable, primaryKey, relations } from "@ponder/core";

export const account = onchainTable("account", (t) => ({
  address: t.hex().primaryKey(),
  bfrAamount: t.bigint().notNull().default(0n),
  esBFRAamount: t.bigint().notNull().default(0n),
}));

export const vesterList = onchainTable("vester", (t) => ({
  address: t.hex().primaryKey(),
  v1balance: t.bigint().notNull().default(0n),
  v2balance: t.bigint().notNull().default(0n),
}));
export const camelotHolders = onchainTable("vester", (t) => ({
  address: t.hex().primaryKey(),
}));
