import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const postRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.user.findFirst({ where: { email: input } });
  }),
  // create: protectedProcedure
  //   .input(
  //     z.object({
  //       email: z.string(),
  //       firstName: z.string(),
  //       lastName: z.string(),
  //       phone: z.string(),
  //     }),
  //   )
  //   .mutation(({ ctx, input }) => {
  //     return ctx.prisma.user.create(...input);
  //   }),
});
