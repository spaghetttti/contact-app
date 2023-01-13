import React, { useState } from "react";
import { Contact } from "./model";
import "./contact-item.styles.css";
import { useAppDispatch } from "../hook";
import { removeContact } from "../store/contactSlice";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { editContact } from "../store/contactSlice";

type FormValues = {
  id: number,
  name: string;
  phoneNumber: number | string;
};

const schema = yup.object().shape({ name: yup.string().required() }).required();
//may export all this shit later from input-from.component to make ti DRY

type Props = {
  contact: Contact;
  // contacts: Contact[];
  // setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
};

const ContactItem = ({ contact }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editName, setEditName] = useState<string>(contact.name);
  const [editPhoneNumber, setEditPhoneNumber] = useState<number | string>(
    contact.phoneNumber
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const onSubmit  = handleSubmit((data) => dispatch(editContact({...contact, ...data})));////dispatch(editContact(data))
  ;

  // const handleDelete = (id: number) => {
  //   setContacts(contacts.filter((contact) => contact.id !== id));
  // };

  // const handleEdit = (e: React.FormEvent, id: number) => {
  //   e.preventDefault();
  //   setContacts(
  //     contacts.map((contact) =>
  //       contact.id === id
  //         ? { ...contact, name: editName, phoneNumber: editPhoneNumber }
  //         : contact
  //     )
  //   );
  //   setEdit(false);
  // };

  //!
  const dispatch = useAppDispatch();

  return (
    <form className="contact-item">
      {edit ? (
        <>
          <input
            // value={editName}
            className="contact-item-line"
            // onChange={(e) => {
            //   setEditName(e.target.value);
            // }}
            {...register("name")}
          />
          <input
            // value={editPhoneNumber}
            className="contact-item-line"
            // onChange={(e) => {
            //   setEditPhoneNumber(e.target.value);
            // }}
            {...register("phoneNumber")}
          />
        </>
      ) : (
        <>
          <span className="contact-item-line">{contact.name}</span>
          <span className="contact-item-line">{contact.phoneNumber}</span>
        </>
      )}

      <div
        className="edit icon"
        onClick={(e) => {
          // handleEdit(e, contact.id);
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
