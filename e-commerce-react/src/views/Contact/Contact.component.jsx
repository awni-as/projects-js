import React, { useState } from "react";

import FormInput from "../../components/UI/Forms/FormInput.component";
import CustomButton from "../../components/UI/Buttons/CustomButton/CustomButton.component";

import "./Contact.styles.scss";

const defaultFormFields = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, message } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  function contactFormSubmissionHandler(event) {
    event.preventDefault();
    resetFormFields();
  }

  function changeHandler(event) {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className="contact">
      <h1>Send us a message</h1>
      <form onSubmit={contactFormSubmissionHandler}>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={changeHandler}
          label="Name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={changeHandler}
          label="Email"
          required
        ></FormInput>
        <CustomButton type="submit" buttonText="Send" />
      </form>
    </div>
  );
}

export default Contact;
