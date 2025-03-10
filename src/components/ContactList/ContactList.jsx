import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((el) => {
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <ul className={css.contactsList}>
        {filteredContacts.map((contactData) => (
          <li className={css.contactCard} key={contactData.id}>
            <Contact data={contactData} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
