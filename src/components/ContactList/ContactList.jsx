import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";

function ContactList() {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <ul className={css.contactsList}>
        {contacts.map((contactData) => (
          <li className={css.contactCard} key={contactData.id}>
            <Contact data={contactData} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
