import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useSelector } from "react-redux";

function App() {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  const filteredContacts = selectContacts.filter((el) => {
    return el.name.toLowerCase().includes(selectNameFilter.toLowerCase());
  });

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={filteredContacts} />
    </>
  );
}

export default App;
