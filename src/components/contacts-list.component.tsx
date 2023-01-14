import "./contacts-list.styles.css";
import ContactItem from "./contact-item.component";

import { useAppSelector } from "../hook";

const ContactsList = () => {
  const ReduxContacts = useAppSelector(state => state.contacts.contacts)
  return (
    <div className="contacts">
      {ReduxContacts.map((e) => (
        <ContactItem
          contact={e}
          key={e.id}
        />
      ))}
    </div>
  );
};

export default ContactsList;
