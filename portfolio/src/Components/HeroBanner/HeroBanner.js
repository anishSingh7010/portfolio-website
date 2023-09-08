import heroImage from '../../assets/portfolioHeroBanner.jpeg';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner-wrapper flex flex-col-reverse py-6">
      <div className="hero-text px-7 text-6xl">
        Hi! I am Anish. Welcome to my website!
      </div>
      <div className="hero-image-wrapper">
        <img alt="Hero" src={heroImage} />
      </div>
    </div>
  );
};

export default HeroBanner;
