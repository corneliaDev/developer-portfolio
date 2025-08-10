import { z } from "zod";

const dangerousPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

export const contactFormSchema = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z0-9 .,!?"'@-]*$/, {
      message: "Only basic characters are allowed",
    })
    .min(3, { message: "Name is too short" })
    .nonempty({ message: "Name is required" })
    .refine((val) => !dangerousPattern.test(val), {
      message: "Invalid characters detected",
    }),
  email: z
    .string()
    .regex(/^[a-zA-Z0-9 .,!?"'@-]*$/, {
      message: "Only basic characters are allowed",
    })
    .email({ message: "Invalid email format" })
    .nonempty({ message: "Email is required" })
    .refine((val) => !dangerousPattern.test(val), {
      message: "Invalid characters detected",
    }),
  message: z
    .string()
    .regex(/^[a-zA-Z0-9 .,!?"'@-]*$/, {
      message: "Only basic characters are allowed",
    })
    .optional()
    .refine((val) => !dangerousPattern.test(val || ""), {
      message: "Invalid characters detected",
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
