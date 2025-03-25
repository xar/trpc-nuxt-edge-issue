import { middleware } from "./init";

export const validateIntegrationAccess = middleware(async ({ ctx, next }) => {
  console.log("validateIntegrationAccess", ctx);
  return next({ ctx });
});
