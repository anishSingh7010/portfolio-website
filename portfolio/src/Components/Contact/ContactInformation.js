import './ContactInformation.css';
import { IoIosContact } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import Social from '../Socials/Social';
import leetcode from '../../assets/leetcode.png';

const ContactInformation = () => {
  return (
    <div className="contact-information-wrapper text-left">
      <div className="mb-6">
        <span className="contact-info">
          <IoIosContact /> Name: Anish
        </span>
        <span className="contact-info">
          <a href="tel:+14379857010">
            <AiOutlinePhone /> Phone: (437)-985-7010
          </a>
        </span>
        <span className="contact-info">
          <a href="mailto:anishsingh0106@gmail.com">
            <HiOutlineMail /> Email: anishsingh0106@gmail.com
          </a>
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
        <Social
          title="Leetcode"
          class="leetcode"
          link="https://leetcode.com/anishkap7010/"
        >
          <img src={leetcode} alt="leetcode-logo" width="30px" height="30px" />
        </Social>
      </div>
    </div>
  );
};

export default ContactInformation;
