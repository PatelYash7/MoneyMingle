import { z } from "zod";

export const paymentInformationZod = z.object({
  token: z.string(),
  user_Identifier: z.string(),
  amount: z.string(),
});