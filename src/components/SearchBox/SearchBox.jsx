import { Field, Form, Formik } from "formik";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

function SearchBox() {
  const searchFieldId = useId();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <Formik initialValues={contacts}>
      <Form className={css.searchForm}>
        <div className={css.searchField}>
          <label name="search" id={searchFieldId}>
            Find contact by name
          </label>
          <Field
            name="search"
            id={searchFieldId}
            value={filter}
            onChange={(e) => {
              dispatch(changeFilter(e.target.value));
            }}
          ></Field>
        </div>
      </Form>
    </Formik>
  );
}

export default SearchBox;
