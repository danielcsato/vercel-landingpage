import type { NextPage } from 'next';
import Landing from '../components/landing/Landing';
import Nav from '../components/nav/Nav';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <div className={styles.center}>
        <Landing />
      </div>
    </>
  );
};

export default Home;
