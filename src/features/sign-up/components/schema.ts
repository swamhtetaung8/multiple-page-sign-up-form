import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(3).max(30),
  age: z.coerce.number(),
  birthday: z.date(),
  email: z.string().email(),
  password: z.string().min(8).min(20),
  confirmPassword: z.string().min(8).min(20),
  receiveNewsLetter: z.boolean()
})

export type SignUpSchema = z.infer<typeof signUpSchema>