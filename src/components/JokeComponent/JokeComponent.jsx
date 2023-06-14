/**
 * Code that renders the individual jokes
 * @returns {JSX.Element}
 */
const JokeComponent = ({ joke }) => {
  return (
    <div>
      <p>{joke?.setup}</p>
    </div>
  );
};

export default JokeComponent;
