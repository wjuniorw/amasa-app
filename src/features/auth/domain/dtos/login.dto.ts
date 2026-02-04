import { z } from 'zod'

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  role: z.string(),
  category: z.string(),
})

export const loginSchema = z.object({
  email: z.email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(6, { message: 'Senha deve ter pelo menos 6 caracteres' })
    .refine((val) => val.trim() !== '', { message: 'Senha é obrigatória' }),
  // .refine((val) => /[a-zA-Z]/.test(val) && /[0-9]/.test(val), {
  //   message: 'Senha deve conter letras e números',
  // }),
})

export const loginResponseSchema = z.object({
  token: z.string(),
  user: userSchema,
})

export type User = z.infer<typeof userSchema>
export type LoginDto = z.infer<typeof loginSchema>
export type LoginResponseDto = z.infer<typeof loginResponseSchema>
