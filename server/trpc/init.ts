import { initTRPC } from "@trpc/server";
import type { H3Event } from "h3";
import superjson from "superjson";
import { transformer } from "./devalue";
export const createTRPCContext = async (event: H3Event) => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
  return { auth: event.context.auth };
};

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  transformer: superjson,
  // transformer: transformer,
});

// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const router = t.router;
export const middleware = t.middleware;
export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  return next({ ctx: { ...ctx, hello: "world" } });
});
