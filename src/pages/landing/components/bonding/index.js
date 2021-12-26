import React from "react";
import styles from "./styles.module.css";
import malarkey from 'malarkey';

class Bonding extends React.Component {
  componentDidMount() {
    const element = document.querySelector('#typewriter')
    function callback (text) {
      element.textContent = text;
    }
    const options = {
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDuration: 2000,
      repeat: true
    }
    malarkey(callback, options)
    .type('gOHM')
    .pause()
    .delete()
    .type('MEMO')
    .pause()
    .delete()
    .type('sGG')
    .pause()
    .delete()
    .type('sSB')
    .pause()
    .delete()
    .type('sFORT')
    .pause()
    .delete()
    .type('sRUG')
    .pause()
    .delete()
    .type('GLA')
    .pause()
    .delete()
    .type('sCROWN')
    .pause()
    .delete()
  }

  render() {
    return (
      <section className={styles.bonding}>
        <div className={styles.background}>
          <div className={styles.background__inner}></div>
        </div>

        <div className={styles.inner}>
          <p className={styles.a}>DON'T (-3,-3)</p>
          <p className={styles.b}>BOND YOUR</p>
          <p className={styles.b}><span id="typewriter">MEMO</span><span className={styles.typer}>|</span></p>
        </div>
      </section>
    );
  }
}

export default Bonding;
