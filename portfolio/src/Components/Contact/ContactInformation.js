import './ContactInformation.css';
import { IoIosContact } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';

const ContactInformation = () => {
  return (
    <div className="contact-information-wrapper">
      <span className="contact-info">
        <IoIosContact /> Name: Anish
      </span>
      <span className="contact-info">
        <AiOutlinePhone /> Phone: (437)-985-7010
      </span>
      <span className="contact-info">
        <HiOutlineMail /> Email: anishsingh0106@gmail.com
      </span>
    </div>
  );
};

export default ContactInformation;
