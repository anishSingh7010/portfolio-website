import AboutIntroduction from './AboutIntroduction';
import './AboutMain.css';
import EducationAndExperience from './EducationAndExperience';
import LatestWork from './LatestWork';
import portfolioAbout from '../../assets/portfolioAbout.png';

const AboutMain = () => {
  return (
    <div className="about-wrapper flex justify-center items-center flex-col">
      <div className="flex items-center mb-7">
        <div className="about-image hidden md:block self-start">
          <img alt="about-intro" src={portfolioAbout} />
        </div>
        <AboutIntroduction />
      </div>
      <EducationAndExperience />
      <LatestWork />
    </div>
  );
};

export default AboutMain;
