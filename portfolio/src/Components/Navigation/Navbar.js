import NavigationLink from './NavigationLink';
import './Navbar.css';

const NavBar = () => {
  return (
    <header className="py-5 px-10">
      <h3 className="text-3xl font-bold underline">LOGO</h3>
      <nav>
        <NavigationLink name="Projects" link="/projects" />
        <NavigationLink name="About" link="/about" />
        <NavigationLink name="Contact" link="/contact" />
      </nav>
    </header>
  );
};

export default NavBar;
