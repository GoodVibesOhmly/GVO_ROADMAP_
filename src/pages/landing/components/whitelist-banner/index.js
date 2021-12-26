import styles from "./styles.module.css";

function WhitelistBanner() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.cta}>
        <p>500/500 whitelist spots claimed</p>
        <a className="button" href="https://discord.gg/indexdao">Join Discord</a>
      </div>
    </section>
  );
}

export default WhitelistBanner;
