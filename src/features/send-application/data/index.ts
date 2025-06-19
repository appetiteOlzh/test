import { z } from "zod/v4";

export const formSchema = z.object({
  token: z.string(),
  name: z.string().min(1, "Поле обязательно для заполнения"),
  email: z
    .email("Некорректный email")
    .min(1, "Поле обязательно для заполнения"),
});

export type FromType = z.infer<typeof formSchema>;
