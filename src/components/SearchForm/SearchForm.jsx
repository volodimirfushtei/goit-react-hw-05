// SearchForm.jsx

import { IoIosSearch } from "react-icons/io";

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
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <IoIosSearch />
            <Field
              type="text"
              autoComplete="off"
              autoFocus
              name="query"
              placeholder={placeholder}
            />
            <ErrorMessage name="query" component="div" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
