import React from "react";
import { Contact } from "./model";
import "./contacts-list.styles.css";
import ContactItem from "./contact-item.component";

interface Props {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

const ContactsList = ({ contacts, setContacts }: Props) => {
  return (
    <div className="contacts">
      {contacts.map((e) => (
        <ContactItem
          contact={e}
          key={e.id}
          contacts={contacts}
          setContacts={setContacts}
        />
      ))}
    </div>
  );
};

export default ContactsList;
