import { useState } from "react";
import { Contact } from "./model";
import { useAppDispatch } from "../hook";
import { removeContact } from "../store/contactSlice";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { editContact } from "../store/contactSlice";

type FormValues = {
  id: number | string;
  name: string;
  phoneNumber: number;
  email: string;
  tag: string;
};

const schema = yup.object().shape({ name: yup.string().required() }).required();
//may export all this shit later from input-from.component to make ti DRY

type Props = {
  contact: Contact;
};

const ContactItem = ({ contact }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const preLoadFormValues = {
    id: contact.id,
    name: contact.name,
    phoneNumber: contact.phoneNumber,
    email: contact.email,
    tag: contact.tag,
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: preLoadFormValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) =>
    dispatch(editContact({ ...contact, ...data }))
  );

  console.log(watch(["name", "phoneNumber", "email", "tag"]));
  const dispatch = useAppDispatch();

  return (
    <div className=" min-w-full ">
    <form className="flex gap-5 justify-around flex-wrap bg-white shadow-md  rounded pt-6 pb-8 mb-4 p-6">
      {edit ? (
        <>
          <input
            type="text"
            className="inline  flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
          <input
            type="tel"
            className="inline  flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            {...register("phoneNumber")}
          />
          <input
            type="email"
            className="inline  flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            {...register("email")}
          />
          <input
            type="text"
            className="block flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            {...register("tag")}
          />
        </>
      ) : (
        <>
          <span className="contact-item-line">{contact.name}</span>
          <span className="contact-item-line">{contact.phoneNumber}</span>
          <span className="contact-item-line">{contact.email}</span>
          <span className="contact-item-line">{contact.tag}</span>
        </>
      )}

      <div
        className="inline-flex items-center rounded border border-0-r px-6 ml-4 text-bold bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded"
        onClick={(e) => {
          if (edit) {
            onSubmit();
          }
          setEdit(!edit);
        }}
      >
        {edit ? "SAVE" : "EDIT"}
      </div>
      <div
        className="inline-flex items-center rounded border border-0-r px-6 ml-4 text-bold bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded"
        onClick={() => dispatch(removeContact(contact.id))}
      >
        DELETE
      </div>
    </form>
    </div>
  );
};

export default ContactItem;
