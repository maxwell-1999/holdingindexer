import { ponder } from "@/generated";
import { account } from "../ponder.schema";

ponder.on("BFR:Transfer", async ({ event, context }) => {
  await context.db
    .insert(account)
    .values({ address: event.args.from, fsBLPBalance: 0n })
    .onConflictDoUpdate((row) => ({
      fsBLPBalance: row.fsBLPBalance - event.args.amount,
    }));

  await context.db
    .insert(account)
    .values({ address: event.args.to, fsBLPBalance: 0n })
    .onConflictDoUpdate((row) => ({
      fsBLPBalance: row.fsBLPBalance + event.args.amount,
    }));
});
