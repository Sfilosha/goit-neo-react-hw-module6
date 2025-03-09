import { Field, Form, Formik } from "formik";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const searchFieldId = useId();
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  return (
    <Formik initialValues={selectContacts}>
      <Form className={css.searchForm}>
        <div className={css.searchField}>
          <label name="search" id={searchFieldId}>
            Find contact by name
          </label>
          <Field
            name="search"
            id={searchFieldId}
            value={selectNameFilter}
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
