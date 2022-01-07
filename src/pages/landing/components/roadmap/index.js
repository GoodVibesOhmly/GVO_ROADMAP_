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
      title: "Early January 2021 | LBE",
      content: "Liquidity Bootstrapping Event for Index DAO has concluded! Join our Discord for the latest announcements regarding exact launch date and time!",
      passed: false,
      current: true,
    },
    {
      title: "Mid January 2021 | Launch",
      content: "Index DAO will launch on Trader Joe using MIM raised during the LBE. gOHM, MEMO, and a third DAO decided by the community will be the first bonds available for minting (📈,📈).",
      passed: false,
      current: false,
    },
    {
      title: "Late January 2021 | Bonds",
      content: "Every week new DAO bonds will be made available for minting on a rotating basis. Vote for your DAO in the Discord and on Twitter.",
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
  ];

  return (
    <section className={`${styles.root} container`}>
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
