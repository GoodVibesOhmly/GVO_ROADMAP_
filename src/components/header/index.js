import React from "react";
import styles from "./styles.module.css";
// import Countdown from 'react-countdown';

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        document.getElementById("navbar").classList.add(styles["header--visible"]);
      } else {
        document.getElementById("navbar").classList.remove(styles["header--visible"]);
      }
    });
  }

  render() {
    return (
      <header className={styles.header} id="navbar">
        <nav>
          <div>
            <p className={styles.spots}>500/500 claimed</p>
            {/*
            <p className={styles.countdown}><Countdown date={1640242800000} /></p>
            */}
          </div>

          <a className="button" href="https://discord.gg/indexdao">Discord</a>
        </nav>
      </header>
    );
  }
}

export default Header;
