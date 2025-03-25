import { createTRPCNuxtClient, httpBatchLink } from "trpc-nuxt/client";
import type { AppRouter } from "~/server/trpc/routers";
// import { transformer } from "~/server/trpc/devalue";
import superjson from "superjson";
export default defineNuxtPlugin(() => {
  const trpc = createTRPCNuxtClient<AppRouter>({
    links: [httpBatchLink({ url: "/api/trpc" })],
    transformer: superjson,
  });

  return {
    provide: {
      trpc,
    },
  };
});
