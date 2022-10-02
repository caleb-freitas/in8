import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import * as trpc from '@trpc/server';
import { z } from 'zod';

import { t } from '../trpc';

export const registrationRouter = t.router({
  list: t.procedure
    .query(async({ ctx }) => {
      return await ctx.prisma.registration.findMany()
    }),
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
  infiniteRegistrations: t.procedure
    .input(
      z.object({
        limit: z.number().min(1).max(4).nullish(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ input, ctx }) => {
      const limit = input.limit ?? 4
      const { cursor } = input
      const registrations = await ctx.prisma.registration.findMany({
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          createdAt: 'asc',
        },
      })
      let nextCursor: typeof cursor | undefined = undefined
      if (registrations.length > limit) {
        const nextItem = registrations.pop()
        nextCursor = nextItem?.id
      }
      return {
        registrations,
        nextCursor
      }
    })
  });
