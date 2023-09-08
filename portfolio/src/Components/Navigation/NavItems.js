import NavigationLink from './NavigationLink';

const NavItems = (props) => {
  console.log(props.modalNavigation);
  const navigationItemsClasses =
    'navigation-items ' +
    (props.modalNavigation
      ? 'mobile-navigation flex-col m-auto'
      : 'desktop-navigation');
  return (
    <nav className={navigationItemsClasses}>
      <NavigationLink name="Projects" link="/projects" />
      <NavigationLink name="About" link="/about" />
      <NavigationLink name="Contact" link="/contact" />
    </nav>
  );
};

export default NavItems;
