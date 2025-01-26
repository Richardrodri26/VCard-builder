
import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email({ message: 'El correo electrónico no es válido' }),
  password: z.string()
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    .regex(/[A-Z]/, { message: 'La contraseña debe contener al menos una letra mayúscula' })
    .regex(/[a-z]/, { message: 'La contraseña debe contener al menos una letra minúscula' })
    .regex(/[0-9]/, { message: 'La contraseña debe contener al menos un número' })
    .regex(/[*@!#%&()^~{}]/, { message: 'La contraseña debe contener al menos un carácter especial (*@!#%&()^~{})' })
});

export type signInSchemaType = z.infer<typeof signInSchema>;