import { useState } from 'react';

/**
 * @typedef JokeComponentProps
 * @property {import("../../pages/Home/Home").Joke} joke
 *
 * Code that renders the individual jokes
 * @param {JokeComponentProps} props
 * @returns {JSX.Element}
 */
const JokeComponent = ({ joke }) => {
  const [showPunchline, setShowPunchline] = useState(false);

  return (
    <div>
      <p>{joke?.setup}</p>
      <button onClick={() => setShowPunchline(prev => !prev)}>click me</button>
      {showPunchline && <p>{joke?.punchline}</p>}
    </div>
  );
};

export default JokeComponent;
