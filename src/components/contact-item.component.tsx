import { useState } from "react";
import { Contact } from "./model";
import "./contact-item.styles.css";
import { useAppDispatch } from "../hook";
import { removeContact } from "../store/contactSlice";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { editContact } from "../store/contactSlice";

type FormValues = {
  id: number;
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
    <form className="contact-item">
      {edit ? (
        <>
          <input
            type="text"
            className="contact-item-line"
            {...register("name")}
          />
          <input
            type="tel"
            className="contact-item-line"
            {...register("phoneNumber")}
          />
          <input
            type="email"
            className="contact-item-line"
            {...register("email")}
          />
          <input
            type="text"
            className="contact-item-line"
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
        className="edit icon"
        onClick={(e) => {
          if (edit) {
            onSubmit();
          }
          setEdit(!edit);
        }}
      >
        {edit ? "SAVE" : "EDIT"}
      </div>
      {/*//? old version without dispatch <div className="delete icon" onClick={() => handleDelete(contact.id)}> */}
      <div
        className="delete icon"
        onClick={() => dispatch(removeContact(contact.id))}
      >
        DELETE
      </div>
    </form>
  );
};

export default ContactItem;
