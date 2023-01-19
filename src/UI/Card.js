const Card = (props) => {
  const activate = props.activate;

  return <div className="card">{props.children}</div>;
};

export default Card;
