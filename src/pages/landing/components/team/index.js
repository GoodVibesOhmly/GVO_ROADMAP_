import styles from "./styles.module.css";

function Team() {
  return (
    <section className={styles.root}>
      <h2 className="h2">Board of Directors</h2>
      <p className={styles.subtitle}>Unlike other teams, ours is comprised of actual Solidity developers and marketers with past experience launching, marketing, managing, and scaling DeFi projects.</p>

      <div className={styles.team}>
        <div className={styles.member}>
          <p className={styles.emoji}>🛡</p>
          <p className={styles.name}>Vanguard</p>
          <p className={styles.title}>Solidity Developer</p>
          <p className={styles.bio}>Professional iOS developer for 6+ years, Solidity developer for 2+ years, crypto investor since 2014</p>
        </div>

        <div className={styles.member}>
          <p className={styles.emoji}>⚙️</p>
          <p className={styles.name}>Torque</p>
          <p className={styles.title}>Solidity Developer</p>
          <p className={styles.bio}>Professional full stack developer for 5+ years, Solidity developer for 1+ years, crypto investor since 2015</p>
        </div>

        <div className={styles.member}>
          <p className={styles.emoji}>📡</p>
          <p className={styles.name}>Motif</p>
          <p className={styles.title}>Community Manager</p>
          <p className={styles.bio}>3+ years experience running meetspace events, moderator and contributor across multiple DAOs, crypto investor since 2017</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
