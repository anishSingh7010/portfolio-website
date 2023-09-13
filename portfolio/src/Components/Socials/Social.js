import './Social.css';

const Social = (props) => {
  return (
    <a
      title={props.title}
      href={props.link}
      className={'social-' + props.class}
      target="_blank"
    >
      {props.children}
    </a>
  );
};

export default Social;
