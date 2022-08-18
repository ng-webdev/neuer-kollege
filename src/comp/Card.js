import "./CSS_Card.css";

function Card(propsApp) {
  return <div className="card">{propsApp.children}</div>;
}

export default Card;
