import { useState } from 'react';
import useInput from '../../hooks/use-input';
import Input from '../UI/Input';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { Modal } from '../UI/Modal';
import SuccessfulEmail from './SuccessfulEmail';
import { CgClose } from 'react-icons/cg';

const ContactForm = () => {
  const [showEmailSuccessModal, setShowEmailSuccessModal] = useState(false);

  const showEmailSuccessModalHandler = () => {
    setShowEmailSuccessModal(true);
  };

  const hideEmailSuccessModalHandler = () => {
    setShowEmailSuccessModal(false);
  };

  const {
    value: nameValue,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetNameInput,
    isValid: nameIsValid,
  } = useInput((value) => value.trim() !== '');

  const {
    value: emailValue,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmailInput,
    isValid: emailIsValid,
  } = useInput((value) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return value.trim() !== '' && emailRegex.test(value);
  });

  const {
    value: queryValue,
    hasError: queryHasError,
    valueChangeHandler: queryChangeHandler,
    inputBlurHandler: queryBlurHandler,
    resetInput: resetQueryInput,
    isValid: queryIsValid,
  } = useInput((value) => value.trim().length >= 30);

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    // implement loading state here

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        {
          email: emailValue,
          message: queryValue,
          name: nameValue,
        },
        process.env.REACT_APP_EMAIL_PUBLIC
      )
      .then(function (response) {
        if (response.status === 200) {
          showEmailSuccessModalHandler();
        }
      });

    // handle errors
    resetNameInput();
    resetEmailInput();
    resetQueryInput();
  };

  let formIsValid = nameIsValid && emailIsValid && queryIsValid;

  return (
    <div className="contact-form-wrapper text-center">
      <h2 className="text-3xl mb-8">Contact Me</h2>
      <form onSubmit={submitFormHandler}>
        <Input
          placeholder="Name*"
          identifier="name"
          input={{
            type: 'text',
            minLength: '1',
            maxLength: '25',
          }}
          value={nameValue}
          hasError={nameHasError}
          onChangeHandler={nameChangeHandler}
          onBlurHandler={nameBlurHandler}
          errorMessage="Name is required."
        />
        <Input
          placeholder="Email*"
          identifier="email"
          input={{ type: 'email' }}
          value={emailValue}
          hasError={emailHasError}
          onChangeHandler={emailChangeHandler}
          onBlurHandler={emailBlurHandler}
          errorMessage="Please enter a valid email."
        />
        <div className="queries-wrapper">
          <textarea
            placeholder="Comments/Queries*"
            id="queries"
            minLength="30"
            maxLength="400"
            value={queryValue}
            onChange={queryChangeHandler}
            onBlur={queryBlurHandler}
          />
          {queryHasError && (
            <span className="form-error-message text-red-500	font-bold">
              Your query should have atleast 30 characters.
            </span>
          )}
        </div>

        <button
          disabled={!formIsValid}
          className="button block contact-us-submit m-auto"
        >
          Send Email
        </button>
      </form>
      {showEmailSuccessModal && (
        <Modal onClose={hideEmailSuccessModalHandler}>
          <div className="email-modal flex h-full w-full content-center">
            <SuccessfulEmail />
            <button
              className="self-start"
              onClick={hideEmailSuccessModalHandler}
            >
              <CgClose />
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ContactForm;
