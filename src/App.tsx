import "./App.css";
import ContactsList from "./components/contacts-list.component";
import ControlPanel from "./components/control-panel.component";
import { db } from "./firebase-config";
import { useState } from "react";

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div className="App">
      <span className="header">Contacts</span>
      <ControlPanel setSearchValue={setSearchValue}/>
      <ContactsList searchValue={searchValue}/>
    </div>
  );
};

export default App;
