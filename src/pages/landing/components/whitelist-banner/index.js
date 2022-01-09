import styles from "./styles.module.css";

function WhitelistBanner() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.cta}>
        <p>LBE has concluded</p>
        <a className="button" href="https://launch.indexdao.finance">Claim aINDEX</a>
      </div>
    </section>
  );
}

export default WhitelistBanner;
