import heroImage from '../../assets/portfolioHeroBanner.jpeg';
import './HeroBanner.css';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="hero-banner-wrapper flex flex-col-reverse py-6">
      <div className="hero-text px-7 text-4xl">
        <div className="">
          <span>Hi! I am</span>
          <span className="block text-7xl hero-name">Anish</span>
          <span className="text-4xl block hero-position">
            Full stack developer
          </span>
          <span className="text-xl hero-intro">
            Welcome to my portfolio website. Check out my work or find out
            more about my background.
          </span>
        </div>

        <Link to="/projects" className="button hero-button block m-auto">
          My Work
        </Link>
        <Link to="/about" className="button hero-button block m-auto">
          About Me
        </Link>
      </div>
      <div className="hero-image-wrapper">
        <img alt="Hero" src={heroImage} />
      </div>
    </div>
  );
};

export default HeroBanner;
