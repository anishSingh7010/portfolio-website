import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  return (
    <div className="error-page-wrapper text-center">
      <h1 className="block error-404-title">OOPS!</h1>
      <div>
        <div className="error-404-contents">
          <h2>404 - Page Not Found</h2>
          <p>The page you are looking for does not exist!</p>
        </div>
        <Link className="button block mt-6 mx-auto w-200" to="/">
          GO TO HOMEPAGE
        </Link>
      </div>
    </div>
  );
};

export default Error404;
