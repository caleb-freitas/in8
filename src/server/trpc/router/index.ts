import { t } from "../trpc";

import { registrationRouter } from "./registration";

export const appRouter = t.router({
  registration: registrationRouter,
});

export type AppRouter = typeof appRouter;
