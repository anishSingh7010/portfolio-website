import { NavLink } from 'react-router-dom';

const NavigationLink = (props) => {
  return (
    <NavLink className="mx-10" to={props.link}>
      {props.name}
    </NavLink>
  );
};

export default NavigationLink;
