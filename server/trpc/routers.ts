import { z } from "zod";
import { protectedProcedure, router } from "./init";
import { validateIntegrationAccess } from "./validate-integration-access";
export const appRouter = router({
  test: router({
    completions: protectedProcedure
      .input(z.any())
      .use(validateIntegrationAccess)
      .mutation(async ({ ctx, input }) => {
        console.log("Fired", input);
        return {
          success: true,
          input,
        };
      }),
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
