import "./contacts-list.styles.css";
import ContactItem from "./contact-item.component";
import { useAppSelector } from "../hook";
import { Contact } from "./model";

type Props = {
  searchValue: string;
};

const ContactsList = ({ searchValue }: Props) => {
  let ReduxContacts: Contact[];
  ReduxContacts = useAppSelector((state) => state.contacts.contacts);
  if (searchValue) {
    ReduxContacts = ReduxContacts.filter(
      (e) =>
        e.name.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
        e.phoneNumber
          .toString()
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
          e.email
          .toString()
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
          e.tag
          .toString()
          .toLowerCase()
          .includes(searchValue.toLowerCase())
    );
  }
  return (
    <div className="contacts">
      {ReduxContacts.map((e) => (
        <ContactItem contact={e} key={e.id} />
      ))}
    </div>
  );
};

export default ContactsList;
