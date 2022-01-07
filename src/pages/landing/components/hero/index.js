import styles from "./styles.module.css";
// import Countdown from 'react-countdown';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.countdown}>
        LBE HAS CONCLUDED
      </div>

      <div>
        <h1>INDEX DAO</h1>
        <p>Why stake just one DAO when you can stake them all?</p>

        <div className={styles.hero__buttons}>
          <a className="button" href="https://discord.gg/indexdao" target="_blank" rel="noopener noreferrer">Join Discord</a>
          <a className="button" href="https://launch.indexdao.finance/">Launch LBE</a>
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
