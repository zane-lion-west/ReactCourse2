import { Hello } from '#components';
import s from './Home.module.scss';

/**
 * Home Page
 * @returns {JSX.Element}
 */

const Home = (): JSX.Element => {
  return (
    <div className={s.wrapper}>
      Hello
      <Hello text={'Hello World'} />
    </div>
  );
};

export default Home;
