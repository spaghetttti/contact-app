import "./App.css";
import ContactsList from "./components/contacts-list.component";
import ControlPanel from "./components/control-panel.component";
import { useState } from "react";

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div className="App">
      <h1 className="header">Contacts</h1>
      <ControlPanel setSearchValue={setSearchValue}/>
      <ContactsList searchValue={searchValue}/>
    </div>
  );
};

export default App;
