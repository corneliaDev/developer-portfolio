import { toast } from "sonner";
import { supabase } from "./supabaseClient";
import { FieldValues } from "react-hook-form";

export const updateContactsDB = async (data: FieldValues) => {
  const { name, email, message } = data;
  try {
    const { data, error } = await supabase
      .from("contacts")
      .insert({ name, email, message });
    if (error) {
      throw error;
    }
    toast.success(
      "Form submitted successfully. Thank you! I will contact you."
    );
    return data;
  } catch (error) {
    toast.error("Error submitting form:");
    console.error("Error submitting form:", error);
  }
};
