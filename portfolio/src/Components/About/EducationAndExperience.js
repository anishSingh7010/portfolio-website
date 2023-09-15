import { LuGraduationCap } from 'react-icons/lu';
import './EducationAndExperience.css';
import Timeline from '../UI/Timeline';

const EducationAndExperience = () => {
  return (
    <>
      <h1 className="text-4xl">My Journey</h1>
      <div
        id="education-experience"
        className="education-experience-wrapper flex flex-col justify-center items-center md:flex-row md:flex-start"
      >
        <div className="education">
          <h1 className="text-3xl mb-5 text-center">
            <LuGraduationCap className="mr-2" />
            Education
          </h1>
          <div className="timeline-wrapper flex flex-col">
            <Timeline
              institute="University of Guelph, Canada"
              position="Master's in Computer Engineering"
              duration="2020 - 2021"
            />
            <Timeline
              institute="Thapar University, India"
              position="Bachelor's in Computer Engineering"
              duration="2014-2018"
            />
          </div>
        </div>
        <div className="experience">
          <h1 className="text-3xl mb-5 text-center">
            <LuGraduationCap className="mr-2" />
            Work Experience
          </h1>
          <div className="timeline-wrapper flex flex-col">
            <Timeline
              institute="Publicis Sapient Canada"
              position="Senior Engineer L1"
              duration="Jan 2023 - Present"
            />
            <Timeline
              institute="Publicis Sapient Canada"
              position="Associate Technology L2"
              duration="May 2021 - Dec 2022"
            />
            <Timeline
              institute="Publicis Sapient India"
              position="Associate Technology L1"
              duration="Jul 2018 - Nov 2019"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationAndExperience;
