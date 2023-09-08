import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import NavItems from './NavItems';
import { Modal } from '../../UI/Modal';
import { CgClose } from 'react-icons/cg';

const NavBar = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const showNavigationModalHandler = () => {
    setIsNavigationOpen(true);
  };

  const hideNavigationModalHandler = () => {
    setIsNavigationOpen(false);
  };

  return (
    <header className="py-5 px-10 sticky">
      <h3 className="logo text-3xl font-bold">LOGO</h3>
      {isNavigationOpen && (
        <Modal onClose={hideNavigationModalHandler}>
          <div className="nav-modal flex h-full">
            <NavItems modalNavigation={isNavigationOpen} />
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
