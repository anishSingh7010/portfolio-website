import { Helmet } from 'react-helmet';
import AboutMain from '../Components/About/AboutMain';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Anish Portfolio</title>
      </Helmet>
      <AboutMain />
    </>
  );
};

export default About;
