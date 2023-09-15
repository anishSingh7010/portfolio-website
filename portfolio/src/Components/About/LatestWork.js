import { Link } from 'react-router-dom';

const LatestWork = () => {
  return (
    <div className="latest-work">
      <h1 className="text-3xl inline">Check out my latest work </h1>
      <Link className="block button m-auto" to="/projects">
        Click Here
      </Link>
    </div>
  );
};

export default LatestWork;
