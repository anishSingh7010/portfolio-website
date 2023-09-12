import './Social.css';

const Social = (props) => {
  return (
    <a
      title={props.title}
      href={props.link}
      className={'social-' + props.class}
    >
      {props.children}
    </a>
  );
};

export default Social;
