import React from 'react';
import Card from './Card/Card';
import styles from './Main.module.css';
import Sidebar from './Sidebar/Sidebar';

const Main = (props) => {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Card card={props.card} choosedCity={props.choosedCity} />
          </div>
          <div className={styles.sidebar}>
            <Sidebar cards={props.cards} choosedTower={props.choosedTower} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
