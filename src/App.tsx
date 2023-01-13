import { useState } from "react";
import "./App.css";
import ContactsList from "./components/contacts-list.component";
import ControlPanel from "./components/control-panel.component";
import { Contact } from "./components/model";

const App: React.FC = () => {
  // const [name, setName] = useState<string>("");
  // const [phoneNumber, setPhoneNumber] = useState<number | string>('')
  // const [contacts, setContacts] = useState<Array<Contact>>([]);

  // const handleAddition = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (name) {
  //     setContacts([...contacts, { id: Date.now(), name, phoneNumber }]);
  //     setName("");
  //     setPhoneNumber('')
  //   }
  // };
  // console.log(contacts);

  return (
    <div className="App">
      <span className="header">Contacts</span> 
      <ControlPanel
        // name={name}
        // setName={setName}
        // phoneNumber={phoneNumber}
        // setPhoneNumber={setPhoneNumber}
        // handleAddition={handleAddition}
      />
      <ContactsList 
      // contacts={contacts} setContacts={setContacts}
      />
      
    </div>
  );
};

export default App;
