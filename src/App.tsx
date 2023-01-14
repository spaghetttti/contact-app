import "./App.css";
import ContactsList from "./components/contacts-list.component";
import ControlPanel from "./components/control-panel.component";

const App: React.FC = () => {

  return (
    <div className="App">
      <span className="header">Contacts</span> 
      <ControlPanel/>
      <ContactsList />
    </div>
  );
};

export default App;
