import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useFormik } from "formik";

function App() {
  // const [input, setInput] = useState({
  //   name: "",
  //   edad: 0,
  //   email: "",
  // });

  // const [error, setError] = useState("");

  // function handleChange(e) {
  //   const { value, name } = e.target;

  //   if (name === "email") {
  //     validateEmail(input.email);
  //   }
  //   if(name === "edad") {
  //     validarEdad(input.edad)
  //   }

  //   setInput({
  //     ...input,
  //     [name]: value, // Sintaxis ES6 para actualizar la key correspondiente
  //   });
  // }

  // function validateEmail(value) {
  //   var emailPattern = /\S+@\S+\.\S+/; // Expresion Regular para validar Emails.

  //   if (!emailPattern.test(value)) {
  //     console.log("entro al if");
  //     setError("Debe ser un email");
  //   } else {
  //     setError("");
  //   }
  // }

  // return (
  //   <>
  //     <input
  //       type="text"
  //       name="name"
  //       value={input.name}
  //       onChange={(e) => handleChange(e)}
  //     />
  //     <input
  //       type="number"
  //       name="edad"
  //       value={input.edad}
  //       onChange={(e) => handleChange(e)}
  //     />
  //     <input
  //       type="text"
  //       name="email"
  //       value={input.email}
  //       onChange={(e) => handleChange(e)}
  //     />
  //     {!error ? null : <div>{error}</div>}
  //   </>
  // );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate: (values) => {
      const errors = {}; //   {email: "Required"}
      if (!values.firstName) {
        errors.firstName = "Required";
      } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less";
      }

      if (!values.lastName) {
        errors.lastName = "Required";
      } else if (values.lastName.length > 20) {
        errors.lastName = "Must be 20 characters or less";
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
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
