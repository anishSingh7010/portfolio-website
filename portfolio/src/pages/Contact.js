import { Helmet } from 'react-helmet';
import ContactForm from '../Components/Contact/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Anish Portfolio</title>
      </Helmet>
      <ContactForm />
    </>
  );
};

export default Contact;
