import { Helmet } from 'react-helmet';
import Projects from '../Components/Projects/Projects';

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Anish Portfolio</title>
      </Helmet>
      <Projects />
    </>
  );
};

export default ProjectsPage;
