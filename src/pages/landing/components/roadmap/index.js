import styles from "./styles.module.css";

function Roadmap() {
  const roadmap = [
    {
      title: "November 2021 | Development",
      content: "Index DAO was developed in stealth mode for 2 months by a team comprised of solidity developers and marketers with past experience launching, marketing, and scaling DeFi projects.",
      passed: true,
      current: false,
    },
    {
      title: "5th January 2022 | LBE",
      content: "Liquidity Bootstrapping Event for Index DAO has concluded and 300,000 MIM was raised!",
      passed: true,
      current: false,
    },
    {
      title: "7th January 2022 | Pre-Launch Marketing",
      content: "Pre-launch marketing is currently underway to grow the Index DAO community and spread mass awareness.",
      passed: false,
      current: true,
    },
    {
      title: "15th January 2022 | Launch",
      content: "Index DAO will launch on Trader Joe using MIM raised during the LBE. gOHM and MEMO will be the first bonds available for minting (📈,📈).",
      passed: false,
      current: false,
    },
    {
      title: "Late January 2022 | DAO Bonds",
      content: "Every week new DAO bonds will be made available for minting on a rotating basis. Vote for your favorite DAO via Snapshot.",
      passed: false,
      current: false,
    },
    {
      title: "Q1 2022 | CG + CMC Listings",
      content: "The INDEX token will be listed on CoinGecko and CoinMarketCap where you can track its price and market capitalization.",
      passed: false,
      current: false,
    },
    {
      title: "Q1 2022 | Audit + Marketing + Airdrops",
      content: "To support the long term growth of Index DAO marketing will be pushed out in early Q1. INDEX will also be airdroped to long term holders and supporters of the project all throughout Q1 to reward early investors.",
      passed: false,
      current: false,
    },
    {
      title: "Q1 2022 | Diamond Hand Rewards",
      content: "Additional rewards for INDEX stakers from day 1 will be revealed in early 2022.",
      passed: false,
      current: false,
    },
    {
      title: "Q2 2022 | Cross Chain Bonds",
      content: "Cross chain bonds will be introduced in Q2 of 2022 to spread (📈,📈) across all chains.",
      passed: false,
      current: false,
    },
    {
      title: "Q3 2022 | Real World Assets",
      content: "Index DAO's long term goals are to incorporate tokenized real world assets to the treasury such as real estate, precious metals, etc.",
      passed: false,
      current: false,
    },
    {
      title: "Beyond | Continued Development",
      content: "Index DAO will continue to expand its treasury and potentially split into multiple focused indices to give investors more choice of investment strategies.",
      passed: false,
      current: false,
    },
  ];

  return (
    <section className={`${styles.root} container`} id="roadmap">
      <h2 className="h2">Roadmap</h2>

      <div className={styles.roadmap}>
        <div className={styles.track}>
          <div className={styles.progress}></div>
        </div>

        {roadmap.map((item, index) => {
          return (
            <div className={`${styles.item} ${styles[`item--${index}`]} ${item.passed ? styles["item--passed"] : ""}`} key={index}>
              <div className={[
                  styles.dot,
                  item.passed ? styles["dot--passed"] : "",
                  item.current ? styles["dot--current"] : "",
                ].join(" ")}>
                <span></span>
              </div>

              <div className={styles.content}>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Roadmap;
