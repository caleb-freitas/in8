import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import * as trpc from '@trpc/server';
import { z } from 'zod';

import { t } from '../trpc';

export const internshipRouter = t.router({
  signup: t.procedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        birthDate: z.string(),
        phoneNumber: z.string()
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        return await ctx.prisma.registration.create({
          data: input
        })
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new trpc.TRPCError({
              code: "CONFLICT",
              message: `e-mail already exists`
            })
          }
        }
      }
    }),
  list: t.procedure.query(async ({ ctx }) => {
    return ctx.prisma.registration.findMany();
  }),
});
