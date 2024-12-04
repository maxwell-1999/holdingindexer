import { vesterList } from "./../ponder.schema";
import { ponder } from "@/generated";
import { account } from "../ponder.schema";

ponder.on("BFR:Transfer", async ({ event, context }) => {
  await context.db
    .insert(account)
    .values({ address: event.args.from, bfrAamount: 0n, esBFRAamount: 0n })
    .onConflictDoUpdate((row) => ({
      bfrAamount: row.bfrAamount - event.args.amount,
    }));

  await context.db
    .insert(account)
    .values({ address: event.args.to, bfrAamount: 0n, esBFRAamount: 0n })
    .onConflictDoUpdate((row) => ({
      bfrAamount: row.bfrAamount + event.args.amount,
    }));
});
ponder.on("esBFR:Transfer", async ({ event, context }) => {
  await context.db
    .insert(account)
    .values({ address: event.args.from, bfrAamount: 0n, esBFRAamount: 0n })
    .onConflictDoUpdate((row) => ({
      esBFRAamount: row.esBFRAamount - event.args.amount,
    }));

  await context.db
    .insert(account)
    .values({ address: event.args.to, bfrAamount: 0n, esBFRAamount: 0n })
    .onConflictDoUpdate((row) => ({
      esBFRAamount: row.esBFRAamount + event.args.amount,
    }));
});
ponder.on("Vester1:Deposit", async ({ event, context }) => {
  await context.db
    .insert(vesterList)
    .values({ address: event.args.account, v1balance: 0n, v2balance: 0n })
    .onConflictDoUpdate((row) => ({
      v1balance: row.v1balance + event.args.amount,
    }));
});
ponder.on("Vester1:Withdraw", async ({ event, context }) => {
  await context.db
    .insert(vesterList)
    .values({ address: event.args.account, v1balance: 0n, v2balance: 0n })
    .onConflictDoUpdate((row) => ({
      v1balance: row.v1balance - event.args.balance,
    }));
});
ponder.on("Vester1:Claim", async ({ event, context }) => {
  await context.db
    .insert(vesterList)
    .values({ address: event.args.receiver, v1balance: 0n, v2balance: 0n })
    .onConflictDoUpdate((row) => ({
      v1balance: row.v1balance - event.args.amount,
    }));
});
ponder.on("Vester2:Deposit", async ({ event, context }) => {
  await context.db
    .insert(vesterList)
    .values({ address: event.args.account, v1balance: 0n, v2balance: 0n })
    .onConflictDoUpdate((row) => ({
      v2balance: row.v2balance + event.args.amount,
    }));
});
ponder.on("Vester2:Withdraw", async ({ event, context }) => {
  await context.db
    .insert(vesterList)
    .values({ address: event.args.account, v1balance: 0n, v2balance: 0n })
    .onConflictDoUpdate((row) => ({
      v2balance: row.v2balance - event.args.balance,
    }));
});
ponder.on("Vester2:Claim", async ({ event, context }) => {
  await context.db
    .insert(vesterList)
    .values({ address: event.args.receiver, v1balance: 0n, v2balance: 0n })
    .onConflictDoUpdate((row) => ({
      v2balance: row.v2balance - event.args.amount,
    }));
});
