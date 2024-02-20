import { useRef, useEffect } from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { BsBriefcase } from 'react-icons/bs';
import './EducationAndExperience.css';
import Timeline from '../UI/Timeline';

const EducationAndExperience = () => {
  const educationRef = useRef();
  const experienceRef = useRef();
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };

    const callbacks = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    let observer = new IntersectionObserver(callbacks, options);
    const elements = [educationRef.current, experienceRef.current];
    elements.forEach((element) => {
      observer.observe(element);
    });
  });

  return (
    <>
      <h1 className="text-4xl mb-10">My Journey</h1>
      <div
        id="education-experience"
        className="education-experience-wrapper flex flex-col justify-center items-center md:flex-row md:flex-start"
      >
        <div className="education fade-in" ref={educationRef}>
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
        <div className="experience fade-in" ref={experienceRef}>
          <h1 className="text-3xl mb-5 text-center">
            <BsBriefcase className="mr-2" />
            Work Experience
          </h1>
          <div className="timeline-wrapper flex flex-col">
            <Timeline
              institute="Publicis Sapient Canada"
              position="Senior Software Engineer 1"
              duration="Jan 2023 - Present"
            />
            <Timeline
              institute="Publicis Sapient Canada"
              position="Software Engineer 2"
              duration="May 2021 - Dec 2022"
            />
            <Timeline
              institute="Publicis Sapient India"
              position="Software Engineer 1"
              duration="Jul 2018 - Nov 2019"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationAndExperience;
