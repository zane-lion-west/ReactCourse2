import { useEffect, useState } from 'react';
import s from './Home.module.scss';

/**
 * @typedef Joke
 * @property {string} punchline - This is the punchline of the joke
 * @property {string} setup
 * @property {number} id
 * @property {string} type
 *
 * Returns 10 jokes from the github api {@link https://github.com/15Dkatz/official_joke_api}
 * @param {boolean} [programming=false]
 * @returns {Promise<Joke[]>}
 */
const getJokes = (programming = false) =>
  fetch(
    `https://official-joke-api.appspot.com/jokes/${
      programming ? 'programming/' : ''
    }ten`,
  ).then(data => data.json());

/**
 * Home Page
 * @returns {JSX.Element}
 */
const Home = () => {
  const [jokes, setJokes] = useState();

  useEffect(() => {
    if (!jokes) {
      getJokes()
        .then(jokes => setJokes(jokes))
        .catch(e => console.error(e.message));
    }
  }, [jokes]);

  return <div className={s.wrapper}>Home</div>;
};

export default Home;
