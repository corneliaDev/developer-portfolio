import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormData,
} from "@/lib/schemas/contactFormSchema";

import { AlertCircle } from "lucide-react";

import DOMPurify from "dompurify";
import Button from "./Button";
import { updateContactsDB } from "@/services/apiContacts";

// Zod schema

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    const sanitizedData = {
      name: DOMPurify.sanitize(data.name),
      email: DOMPurify.sanitize(data.email),
      message: DOMPurify.sanitize(data.message || ""),
    };

    await updateContactsDB(sanitizedData);
    reset();
  };

  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {/* Name Field */}
      <div className="relative mb-8">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          placeholder="Name"
          autoComplete="off"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full pl-6 pb-4 bg-inherit border-b border-dark dark:border-light placeholder:uppercase placeholder:text-dark dark:placeholder:text-light text-contactForm placeholder:text-contactForm uppercase focus:outline-none focus:border-primary focus:dark:border-primary"
        />
        {errors.name && (
          <span
            id="name-error"
            className="absolute right-0 -bottom-8 text-xs text-error flex items-center gap-1"
          >
            <AlertCircle size={16} />
            {errors.name.message}
          </span>
        )}
      </div>

      {/* Email Field */}
      <div className="relative mb-8">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          {...register("email")}
          type="email"
          placeholder="Email"
          autoComplete="off"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full pl-6 pb-4 bg-inherit border-b border-dark dark:border-light placeholder:uppercase placeholder:text-dark dark:placeholder:text-light text-contactForm placeholder:text-contactForm uppercase focus:outline-none focus:border-primary focus:dark:border-primary "
        />
        {errors.email && (
          <span
            id="email-error"
            className="absolute right-0 -bottom-8 text-xs text-error flex items-center gap-1"
          >
            <AlertCircle size={16} />
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Message Field */}
      <div className="relative">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Message"
          rows={4}
          autoComplete="off"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "name-error" : undefined}
          className="pl-6 w-full resize-none bg-inherit border-b border-dark dark:border-light placeholder:uppercase placeholder:text-dark dark:placeholder:text-light text-body placeholder:text-contactForm focus:outline-none focus:border-primary focus:dark:border-primary"
        />
        {errors.message && (
          <span
            id="message-error"
            className="absolute right-0 -bottom-8 text-xs text-error flex items-center gap-1"
          >
            <AlertCircle size={16} />
            {errors.message.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-8 desktop:pt-12 self-end">
        <Button text="send message" disabled={isSubmitting} />
      </div>
    </form>
  );
}
