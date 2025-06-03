import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: '이름은 1자 이상 입력해주세요.' })
    .max(50, { message: '이름은 50자 이하로 입력해주세요.' }),
  email: z
    .string()
    .email({ message: '유효한 이메일 주소를 입력해주세요.' }),
  message: z
    .string()
    .min(10, { message: '메시지는 10자 이상 입력해주세요.' })
    .max(1000, { message: '메시지는 1000자 이하로 입력해주세요.' })
});

export type ContactFormData = z.infer<typeof contactSchema>;
