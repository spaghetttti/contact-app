import React, { useState } from "react";
import { Contact } from "./model";
import "./contact-item.styles.css";

type Props = {
  contact: Contact;
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
};

const ContactItem = ({ contact, contacts, setContacts }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editName, setEditName] = useState<string>(contact.name);
  const [editPhoneNumber, setEditPhoneNumber] = useState<number | string>(
    contact.phoneNumber
  );

  const handleDelete = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setContacts(
      contacts.map((contact) =>
        contact.id === id
          ? { ...contact, name: editName, phoneNumber: editPhoneNumber }
          : contact
      )
    );
    setEdit(false);
  };

  return (
    <form className="contact-item">
      {edit ? (
        <>
          <input
            value={editName}
            className="contact-item-line"
            onChange={(e) => {
              setEditName(e.target.value); 
            }}
          />
          <input
            value={editPhoneNumber}
            className="contact-item-line"
            onChange={(e) => {
              setEditPhoneNumber(e.target.value);
            }}
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
          handleEdit(e, contact.id);
          setEdit(!edit);
        }}
      >
        {edit ? "SAVE" : "EDIT"}
      </div>
      <div className="delete icon" onClick={() => handleDelete(contact.id)}>
        DELETE
      </div>
    </form>
  );
};

export default ContactItem;
