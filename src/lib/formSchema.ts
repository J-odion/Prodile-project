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

export const signupFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 character(s) long",
    })
    .max(28, {
      message: "Password must contain at most 28 character(s)",
    }),
  confirmPassword: z.string()
    .min(8, {
      message: "Password must be at least 8 character(s) long",
    })
    .max(28, {
      message: "Password must contain at most 28 character(s)",
    }),
});

export const resetPasswordSchema = z.object({
  email: z.string().email(),
})


export const confirmEmailSchema = z.object({
  telephone: z.string().min(11, {
    message: "Phone number must be at least 11 character(s) long",
  }),
})
