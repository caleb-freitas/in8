import { t } from "../trpc";

import { internshipRouter } from "./internship";

export const appRouter = t.router({
  internship: internshipRouter,
});

export type AppRouter = typeof appRouter;
