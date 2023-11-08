const Game = (props) => {
  const { img, title, tv, number } = props;
  return (
    <article className="match">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{tv}</h4>
      <span className="number">{number}</span>
    </article>
  );
};

export default Game;
