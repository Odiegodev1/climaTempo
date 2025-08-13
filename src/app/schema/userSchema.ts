import { z } from "zod";

export const userSchema = z.object({
    nome: z.string().min(1, 'O nome é obrigatório'),
    email: z.string().email('O email é obrigatório'),
    idade: z.number().int().positive("A idade deve ser maior que zero"),
})

export type UserFormData = z.infer<typeof userSchema>