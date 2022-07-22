const Card = ({ time, title }) => {
  return (
    <li className="card">
      <p className="time">{time}</p>
      <p className="label">{title}</p>
    </li>
  );
};

export default Card;
