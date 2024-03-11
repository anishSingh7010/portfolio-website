import ProjectUI from './ProjectUI';
import stockGym from '../../assets/stock-gym-image.jpg';
import './Projects.css';
import Skills from './Skills';

const Projects = () => {
  return (
    <div className="projects-page-wrapper flex justify-center items-center flex-col p-10 ">
      <div className="flex flex-col items-center mb-11">
        <h1 className="text-5xl font-bold mb-11">My Projects</h1>
        <div className="projects-introduction mb-7 text-center text-lg">
          <p className="disclaimer">
            I am always working on new projects and keep adding them here. So,
            please keep an eye out for my new works!
          </p>
          <p className="text-center">
            Also, feel free to check out my skillset. Scroll down past the
            projects or{' '}
            <a className="underline" href="#skills-section">
              Click Here.
            </a>
          </p>
        </div>
        <div className="projects-wrapper flex justify-center items-center flex-col w-full">
          {
            <ProjectUI
              backgroundImage={stockGym}
              title="Workout Tracker"
              description=" Workout
          Tracker where clients can login/signup and track their workouts and
          see their progress over time."
              githubLink="https://github.com/anishSingh7010/workoutTracker"
            />
          }
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Projects;
