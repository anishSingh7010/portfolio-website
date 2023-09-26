import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import NavItems from './NavItems';
import { Modal } from '../UI/Modal';
import { CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import portfolioLogo from '../../assets/portfolioLogo.png';

const NavBar = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const showNavigationModalHandler = () => {
    setIsNavigationOpen(true);
  };

  const hideNavigationModalHandler = () => {
    setIsNavigationOpen(false);
  };

  return (
    <header className="py-5 px-10 sticky top-0 bg-white	z-50">
      <button
        className="hamburger-menu invisible"
        onClick={showNavigationModalHandler}
      >
        <GiHamburgerMenu />
      </button>
      <h3 className="logo text-3xl font-bold">
        <Link to="/">
          <img src={portfolioLogo} alt="logo" title="Home" width="100px" />
        </Link>
      </h3>
      {isNavigationOpen && (
        <Modal onClose={hideNavigationModalHandler}>
          <div className="nav-modal flex h-full">
            <NavItems
              hideNavigation={hideNavigationModalHandler}
              modalNavigation={isNavigationOpen}
            />
            <button className="self-start" onClick={hideNavigationModalHandler}>
              <CgClose />
            </button>
          </div>
        </Modal>
      )}
      <NavItems modalNavigation={false} />
      <button className="hamburger-menu" onClick={showNavigationModalHandler}>
        <GiHamburgerMenu />
      </button>
    </header>
  );
};

export default NavBar;
