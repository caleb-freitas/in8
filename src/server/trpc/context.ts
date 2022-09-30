import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { prisma } from "../db/client";

type CreateContextOptions = Record<string, never>;

// helper context
export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    prisma,
  };
};

// trpc context
export const createContext = async (
  opts: trpcNext.CreateNextContextOptions,
) => {
  return await createContextInner({});
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
