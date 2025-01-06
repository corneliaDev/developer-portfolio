import Button from "./Button";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import AlertCircleOutlineIcon from "./AlertCircleOutlineIcon";
import { updateContactsDB } from "../services/apiContacts";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data: FieldValues) => {
    updateContactsDB(data);
    reset();
  };

  return (
    <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <label htmlFor="name" className="text-contactForm">
          <input
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Name is too short" },
            })}
            type="text"
            autoComplete="off"
            placeholder="Name"
            className="w-full pl-6 pb-4 mb-8 bg-inherit border-b border-b-ligthGray  placeholder:uppercase text-contactForm placeholder:text-contactForm focus:outline-none active:border-b-primDGreen focus:border-b-primDGreen"
          />
          {errors.name && (
            <label
              htmlFor="name"
              className="absolute right-0 bottom-1 text-xs text-errRed"
            >{`${errors.name.message}`}</label>
          )}
        </label>
      </div>
      <div className="relative">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Sorry, invalid format here",
            },
          })}
          type="email"
          autoComplete="off"
          placeholder="Email"
          className="w-full pl-6 pb-4 mb-8 text-contactForm overflow-hidden placeholder:text-contactForm placeholder:uppercase bg-inherit border-b border-b-lightGray active:border-b-primDGreen focus:border-b-primDGreen focus:outline-none"
        />
        {errors.email && (
          <label
            htmlFor="email"
            className="absolute right-0 bottom-1 text-xs text-errRed "
          >
            <AlertCircleOutlineIcon />
            {`${errors.email.message}`}
          </label>
        )}
      </div>

      <textarea
        {...register("message")}
        rows={4}
        autoComplete="off"
        placeholder="Message"
        className="pl-6 w-full text-contactForm placeholder:text-contactForm placeholder:uppercase  bg-inherit border-b border-b-lightGray resize-none
           active:border-b-primDGreen focus:border-b-primDGreen text-body text-lightGray focus:outline-none"
      ></textarea>

      <div className="pt-8 self-end">
        <Button text="send message" disabled={isSubmitting} />
      </div>
    </form>
  );
}
