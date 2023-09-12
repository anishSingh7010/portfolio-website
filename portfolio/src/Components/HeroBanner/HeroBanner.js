import { BsLinkedin, BsGithub } from 'react-icons/bs';
import heroImage from '../../assets/portfolioHeroBanner.jpeg';
import Social from '../Socials/Social';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner-wrapper flex flex-col-reverse py-6">
      <div className="hero-text px-7 text-6xl">
        Hi! I am Anish. Welcome to my website!
        <button className="hero-button block m-auto">My Work</button>
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
      <div className="hero-image-wrapper">
        <img alt="Hero" src={heroImage} />
      </div>
    </div>
  );
};

export default HeroBanner;
