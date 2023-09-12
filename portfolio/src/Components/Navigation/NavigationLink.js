import { NavLink } from 'react-router-dom';

const NavigationLink = (props) => {
  return (
    <NavLink
      onClick={props.clickHandle}
      className="mx-10 nav-links text-lg font-semibold"
      to={props.link}
      title={props.name}
    >
      {props.name}
    </NavLink>
  );
};

export default NavigationLink;
