// SearchForm.jsx

import { IoIosSearch } from "react-icons/io";
import s from "./SearchForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SearchForm = ({ onSubmit }) => {
  const placeholder = "Search movies";
  const initialValues = {
    query: "",
  };
  const validationSchema = Yup.object({
    query: Yup.string()
      .required("Name is required ")
      .min(2, "Min 2 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.query);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={s.Form}>
          <div className={s.Form_container}>
            <IoIosSearch className={s.icon} />

            <Field
              type="text"
              autoComplete="off"
              autoFocus
              name="query"
              placeholder={placeholder}
              className={s.SearchInput}
            />
          </div>
          <ErrorMessage
            name="query"
            component="div"
            className={s.ErrorMessage}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
