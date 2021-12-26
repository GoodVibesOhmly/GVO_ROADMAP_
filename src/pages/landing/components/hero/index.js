import styles from "./styles.module.css";
// import Countdown from 'react-countdown';

function Hero() {
  return (
    <section className={styles.hero}>
      {/*
      <div className={styles.countdown}>
        <Countdown date={1640242800000} />
      </div>
      */}

      <div>
        <h1>INDEX DAO</h1>
        <p>Why stake just one DAO when you can stake them all?</p>

        <div className={styles.hero__buttons}>
          <a className="button" href="https://discord.gg/indexdao" target="_blank" rel="noopener noreferrer">Join Discord</a>
          <a className="button button--disabled" href="/">Launch app</a>
        </div>
      </div>

      <div className={styles.emoji}>
        <div>🎩 🏰 🦍 👑 ❄️ 🚩 🎩 🏰 🦍 👑 ❄️ 🚩 🎩 🏰 🦍 👑 ❄️ 🚩 🎩 🏰 🦍 👑 ❄️ 🚩 🎩 🏰 🦍 👑 ❄️ 🚩 🎩 🏰 🦍 👑 ❄️ 🚩 🎩 🏰 🦍 👑 ❄️ 🚩 🎩 🏰 🦍 👑 ❄️ 🚩 </div>
        <div>🎩 🏰 🦍 👑 ❄️ 🚩 🎩 🏰 🦍 👑 ❄️ 🚩 🎩 🏰 🦍 👑 ❄️ 🚩 🎩 🏰 🦍 👑 ❄️ 🚩 🎩 🏰 🦍 👑 ❄️ 🚩 🎩 🏰 🦍 👑 ❄️ 🚩 🎩 🏰 🦍 👑 ❄️ 🚩 🎩 🏰 🦍 👑 ❄️ 🚩 </div>
      </div>
    </section>
  );
}

export default Hero;
