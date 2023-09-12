import { useRef } from 'react';
import Input from '../UI/Input';
import './ContactForm.css';

const ContactForm = () => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  // references for the form
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const queriesRef = useRef();

  const nameProperties = {
    type: 'text',
    minLength: 1,
    maxLength: 25,
    required: 'required',
  };

  const emailProperties = {
    type: 'email',
    required: 'required',
  };

  return (
    <div className="contact-form-wrapper text-center">
      <h2 className="text-3xl mb-8">Contact Me</h2>
      <form onSubmit={submitFormHandler}>
        <Input
          placeholder="First Name*"
          identifier="firstName"
          ref={firstNameRef}
          input={nameProperties}
        />
        <Input
          placeholder="Last Name*"
          identifier="lastName"
          ref={lastNameRef}
          input={nameProperties}
        />
        <Input
          placeholder="Email*"
          ref={emailRef}
          identifier="email"
          input={emailProperties}
        />
        <div className="queries-wrapper">
          <textarea
            placeholder="Comments/Queries*"
            ref={queriesRef}
            id="queries"
          />
        </div>

        <button className="block contact-us-submit m-auto">Send Email</button>
      </form>
    </div>
  );
};

export default ContactForm;
