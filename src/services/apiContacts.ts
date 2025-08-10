import sanitizeHtml from "sanitize-html";
import { contactFormSchema } from "@/lib/schemas/contactFormSchema"; // assuming schema exists
import { toast } from "sonner";
import { supabase } from "./supabaseClient";

export const updateContactsDB = async (rawData: unknown) => {
  const result = contactFormSchema.safeParse(rawData);

  if (!result.success) {
    toast.error("Invalid input.");
    console.error(result.error);
    return;
  }

  const sanitizedData = {
    name: sanitizeHtml(result.data.name),
    email: sanitizeHtml(result.data.email),
    message: sanitizeHtml(result.data.message || ""),
  };

  try {
    const { data, error } = await supabase
      .from("contacts")
      .insert(sanitizedData);

    if (error) throw error;

    toast.success("Form submitted successfully. Thank you!");
    return data;
  } catch (error) {
    toast.error("Error submitting form");
    console.error("Error submitting form:", error);
  }
};
