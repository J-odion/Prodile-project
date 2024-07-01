import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 character(s) long",
    })
    .max(28, {
      message: "Password must contain at most 28 character(s)",
    }),
});
