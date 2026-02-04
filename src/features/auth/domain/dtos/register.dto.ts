import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string({ message: 'Nome é obrigatório' }),
  address: z.string({ message: 'Endereço é obrigatório' }),
  phone: z.string().optional(),
  email: z.email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(6, { message: 'Senha deve ter pelo menos 6 caracteres' })
    .refine((val) => val.trim() !== '', { message: 'Senha é obrigatória' })
    .refine((val) => /[a-zA-Z]/.test(val) && /[0-9]/.test(val), {
      message: 'Senha deve conter letras e números',
    }),
})

export const registerResponseSchema = z.object({
  token: z.string(),
  user: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    role: z.string(),
    category: z.string(),
  }),
})

export type RegisterDto = z.infer<typeof registerSchema>
export type RegisterResponseDto = z.infer<typeof registerResponseSchema>
