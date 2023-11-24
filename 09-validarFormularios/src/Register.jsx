import { useFormik } from "formik";
import React from "react";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      contraseña: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.contraseña) {
        errors.contraseña = "Required";
      } else if (
        values.contraseña.length > 15 ||
        values.contraseña.length < 4
      ) {
        errors.contraseña = "La contraseña debe ser entre 4 y 15 caracteres";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="contraseña">Contraseña</label>
      <input
        id="contraseña"
        name="contraseña"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.contraseña}
      />
      {formik.errors.contraseña ? <div>{formik.errors.contraseña}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
}
