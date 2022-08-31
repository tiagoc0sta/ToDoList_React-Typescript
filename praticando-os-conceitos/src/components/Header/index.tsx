import todoLogo from "../../assets/todoLogo.svg";

import styles from './header.module.css';

export function Header(){
  return( 
    <header className={styles.header}>
      <img src={todoLogo} />
    </header>

  );
}