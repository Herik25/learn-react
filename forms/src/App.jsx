import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const intialValues = {
    username: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  // console.log(formErrors);

  const handleChange = (e) => {
    setFormValues({
     ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    }
    if (!values.password) {
      errors.password = "password is required";
    }
    return errors;
  }

  return (
    <div className=" container">
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className=" box">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formValues.username}
            onChange={handleChange}
          />
          {
            formErrors.username && (
              <div className="error">{formErrors.username}</div>
            )
          }
        </div>
        <div className=" box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div className=" box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="btn">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;


// 1 : create a from
// 2 : create intial object(skeleton for our form) and  create a state and pass our skeleton to it
// 3 : set input values to our state values
// 4 : take an input event(onChange) and handle the event
// 5 : store the input to our state
// 6 : take an input event(onSubmit) and handle the event
// 7 : in handle submit event first terminate the default behaviour of submit button(e.preventDefault()) [important]
// 8 : create a state to store the errors
// 9 : now take that state and pass it to the submt handler and crate a validation logic

// use effect thi baki 