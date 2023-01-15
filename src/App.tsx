import "./App.css";
import ContactsList from "./components/contacts-list.component";
import ControlPanel from "./components/control-panel.component";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Contact } from "./components/model";

type DBdata = {
  id: string;
  // name: string
};

const App: React.FC = () => {
  const [dbContacts, setdbContacts] = useState<DBdata[]>();
  const contactsCollectionRef = collection(db, "test");

  useEffect(() => {
    const getContacts = async () => {
      const data = await getDocs(contactsCollectionRef);
      // const dataArray
      const dbData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // console.log(dbData);
      setdbContacts(dbData);
    };
    getContacts();
  }, []);

  return (
    <div className="App">
      <span className="header">Contacts</span>
      <ControlPanel />
      <ContactsList />
    </div>
  );
};

export default App;
