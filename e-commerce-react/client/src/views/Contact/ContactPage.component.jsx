import React, { useState } from "react";

import FormInput from "../../components/UI/Forms/FormInput.component";
import CustomButton from "../../components/UI/Buttons/CustomButton/CustomButton.component";

import { ContactPageContainer, Title } from "./ContactPage.styles";

const defaultFormFields = {
  name: "",
  email: "",
  message: "",
};

function ContactPage() {
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
    <ContactPageContainer>
      <Title>Send us a message</Title>
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
        <FormInput
          type="message"
          name="message"
          value={message}
          onChange={changeHandler}
          label="Message"
          required
        ></FormInput>
        <CustomButton type="submit" buttonText="Send" />
      </form>
    </ContactPageContainer>
  );
}

export default ContactPage;
