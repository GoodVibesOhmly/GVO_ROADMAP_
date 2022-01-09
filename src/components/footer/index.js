import styles from "./styles.module.css";
import DiscordIcon from "../../assets/icons/discord.svg";
import GithubIcon from "../../assets/icons/github.svg";
import GitbookIcon from "../../assets/icons/gitbook.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import MediumIcon from "../../assets/icons/medium.svg";
import Avalanche from "../../assets/images/avalanche.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.border}></div>

      <div className={styles.inner}>
        <a href="https://github.com/indexdao" target="_blank" rel="noopener noreferrer">
          <img alt="GitHub" src={GithubIcon} />
        </a>

        <a href="https://twitter.com/Index_DAO" target="_blank" rel="noopener noreferrer">
          <img alt="Twitter" src={TwitterIcon} />
        </a>

        <a href="https://discord.gg/indexdao" target="_blank" rel="noopener noreferrer">
          <img alt="Discord" src={DiscordIcon} />
        </a>

        <a href="https://docs.indexdao.finance" target="_blank" rel="noopener noreferrer">
          <img alt="Documentation" src={GitbookIcon} />
        </a>

        <a href="https://indexdao.medium.com" target="_blank" rel="noopener noreferrer">
          <img alt="Medium" src={MediumIcon} />
        </a>
      </div>

      <div className={styles.avax}>
        <a href="https://www.avax.network/" target="_blank" rel="noopener noreferrer">
          <img alt="Powered by Avalanche" src={Avalanche} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
