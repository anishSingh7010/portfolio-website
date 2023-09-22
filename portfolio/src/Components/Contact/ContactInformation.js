import './ContactInformation.css';
import { IoIosContact } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import Social from '../Socials/Social';

const ContactInformation = () => {
  return (
    <div className="contact-information-wrapper text-left">
      <div className="mb-6">
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
      <div className="socials">
        <Social
          title="LinkedIn"
          class="linkedin"
          link="https://www.linkedin.com/in/anish-688080164/"
        >
          <BsLinkedin />
        </Social>
        <Social
          title="Github"
          class="github"
          link="https://github.com/anishSingh7010"
        >
          <BsGithub />
        </Social>
      </div>
    </div>
  );
};

export default ContactInformation;
