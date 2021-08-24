import React from 'react';
import styles from './Nav.module.scss';
import Button from './Button';

const Nav = () => {
  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <div className={styles.nav__left}>
          <div className={styles.header_logo}>
            <img src="/assets/vercel-logo.svg" />
          </div>
        </div>
        <div className={styles.nav__middle}>
          <ul>
            <li>
              <a>Templates</a>
            </li>
            <li>
              <a>Integrations</a>
            </li>
            <li>
              <a>Analytcs</a>
            </li>
            <li>
              <a>Customers</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
          </ul>
        </div>
        <div className={styles.nav__right}>
          <div>
            <a>Contact</a>
            <a>Login</a>
            <Button href="/" title="Sign Up" />
          </div>{' '}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
