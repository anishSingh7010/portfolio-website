import AboutIntroduction from './AboutIntroduction';
import './AboutMain.css';
import EducationAndExperience from './EducationAndExperience';
import LatestWork from './LatestWork';

const AboutMain = () => {
  return (
    <div className="about-wrapper flex justify-center items-center flex-col">
      <div className="flex items-center mb-7">
        <div className="about-image hidden md:block">
          <img
            alt="about-intro"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg"
          />
        </div>
        <AboutIntroduction />
      </div>
      <EducationAndExperience />
      <LatestWork />
    </div>
  );
};

export default AboutMain;
