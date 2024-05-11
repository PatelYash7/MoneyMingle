import { z } from "zod";

export const paymentInformationZod = z.object({
  token: z.string(),
  userId: z.string(),
  amount: z.string(),
});