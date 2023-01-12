import React from "react";
import { Contact } from "./model";
import "./contacts-list.styles.css";
import ContactItem from "./contact-item.component";

import { useAppSelector } from "../hook";

interface Props {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

const ContactsList = ({ contacts, setContacts }: Props) => {
  const ReduxContacts = useAppSelector(state => state.contacts.contacts)
  return (
    <div className="contacts">
      {ReduxContacts.map((e) => (
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
