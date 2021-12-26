import styles from "./styles.module.css";

function About() {
  return (
    <section className={`${styles.about} container`}>
      <div>
        <h2 className="h2">Why (3,3) when you can <span className={styles.highlight}>(27,27)</span>?</h2>
        <p>With Index DAO you're amplifying your (3,3) to (27,27) by bonding gOHM / MEMO / etc for INDEX.</p>
        <p>Instead of selling and causing (-3,-3), you can bond for INDEX, maintaining (3,3) in your DAO and amplifying your own strategy.</p>
        <p>We call this (27,27) or (📈,📈).</p>
      </div>
    </section>
  );
}

export default About;
