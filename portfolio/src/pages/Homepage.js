import { Helmet } from 'react-helmet';
import HeroBanner from '../Components/HeroBanner/HeroBanner';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Home - Anish Portfolio</title>
      </Helmet>
      <HeroBanner />
    </>
  );
};

export default Homepage;
