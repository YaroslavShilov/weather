import React from 'react';
import Search from './Search/Search';
import Location from './Location/Location';
import styles from './Sidebar.module.css';

const Sidebar = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <Search />
      </div>
      <div className={styles.locationWrapper}>
        <Location cards={props.cards} choosedTower={props.choosedTower} />
      </div>
    </div>
  );
};

export default Sidebar;
