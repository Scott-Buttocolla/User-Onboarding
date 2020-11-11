import React, { useState, useEffect } from 'react';
// installed axios and yup per readMe file
import axios from 'axios';
import * as yup from 'yup';
import Form from './components/Form';
import formSchema from './components/formSchema'
import Users from './components/users'
import './App.css';


// declaring the values as empty strings for the user to fill out in the form
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  position: "",
  title: "",
  termsOfService: false
}
// setting errors on mandatory values that the user MUST fill in
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  position: "",
  title: "",
}

const initialUsers = []
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUserData = () => {
    axios.get("https://reqres.in/api/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }
  const postNewUsers = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
      .then(response => {
        console.log(response)
        setUsers([...users, response.data])
      })
      .catch(error => {
        console.log(error)
      })
      // .finally(() => {
      //   setFormValues(initialFormValues)
      // })
  }
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name) // get to this part of the schema
      // run validate using the value
      .validate(value) // validating this value
      .then(() => {
        // happy path = success and clear error
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      // if the validation is unsuccessful, we can set the error message 
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          // validation error from the schema
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY
    });
  };


  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      position: formValues.position,
      title: formValues.title,
      termsOfService: formValues.termsOfService
    }
    postNewUsers(newUser);
  }

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);


  return (
    <div className="App">
      <Form
      // calling each function through the props
      values = {formValues}
      inputChange = {inputChange}
      submit = {submit}
      errors = {formErrors}
      disabled = {disabled}
      />
      <Users
      users = {users} />

    </div>
  );
}

export default App;