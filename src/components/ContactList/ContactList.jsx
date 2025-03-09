import { useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

function ContactList({ contacts }) {
  const dispatch = useDispatch();

  const removeContact = (payload) => {
    dispatch(deleteContact(payload));
  };

  return (
    <div>
      <ul className={css.contactsList}>
        {contacts.map((contactData) => (
          <li className={css.contactCard} key={contactData.id}>
            <Contact data={contactData} onDelete={removeContact} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
