import styles from "./styles.module.css";

function Whitelist() {
  return (
    <section className={styles.whitelist} id="liquidity-bootstrapping-event">
      <h2 className="h2">Liquidity Bootstrapping Event</h2>

      <div className={styles.wrapper}>
        <div className={styles.details}>
          <h3>All spots have been claimed!</h3>
          <p>Our Liquidity Bootstrapping Event will be held sometime between late December 2021 and early January 2022. Follow the Discord server for an announcement of the exact launch date once it is decided.</p>
          <p>100,000 INDEX are available for purchase at a price of 5 MIM each with a maximum contribution of 1,000 MIM per user. After the event any INDEX that was not purchased will be available to anyone at a price of 7.5 MIM with a maximum contribution of 500 MIM per wallet address.</p>
          <p>The MIM raised from this event will be used for the intial liquidity (50%), to fund the treasury (30%), and to fund the further development and marketing of Index DAO (20%).</p>

          <a
            className="button button--primary"
            href="https://discord.gg/indexdao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Discord
          </a>
        </div>

        <div className={styles.list}>
          <ul>
            <li>
              <p className={styles["li-head"]}>
                <span className={styles.number}>
                  <span>200/200</span>
                </span>
                <span>All claimed</span>
              </p>

              <p>
                First 200 members to join the Discord and add (📈,📈) to their username.
              </p>
            </li>
            <li>
              <p className={styles["li-head"]}>
                <span className={styles.number}>
                  <span>100/100</span>
                </span>
                <span>All claimed</span>
              </p>

              <p>
                Twitter contest.
              </p>
            </li>
            <li>
              <p className={styles["li-head"]}>
                <span className={styles.number}>
                  <span>100/100</span>
                </span>
                <span>All claimed</span>
              </p>

              <p>
                Members with the most Discord invites of real people.
              </p>
            </li>
            <li>
              <p className={styles["li-head"]}>
                <span className={styles.number}>
                  <span>050/050</span>
                </span>
                <span>All claimed</span>
              </p>

              <p>
                Members who boost the Discord server and remain active.
              </p>
            </li>
            <li>
              <p className={styles["li-head"]}>
                <span className={styles.number}>
                  <span>050/050</span>
                </span>
                <span>All claimed</span>
              </p>

              <p>
                Members who provide service to the Discord (moderate international channels / create gifs / etc).
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Whitelist;
