import React from "react";
import styles from "./styles.module.css";
import Countdown from 'react-countdown';
import DiscordIcon from "../../assets/icons/discord.svg";
import GithubIcon from "../../assets/icons/github.svg";
import GitbookIcon from "../../assets/icons/gitbook.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import MediumIcon from "../../assets/icons/medium.svg";
import HamburgerIcon from "../../assets/icons/hamburger.svg";
import Logo from "../../assets/images/logo-type-black.png";

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        document.getElementById("navbar").classList.add(styles["header--scrolled"]);
      } else {
        document.getElementById("navbar").classList.remove(styles["header--scrolled"]);
      }
    });
  }

  toggleDrawer() {
    if (document.getElementById("drawer").classList.contains(styles["drawer--open"])) {
      document.getElementById("drawer").classList.remove(styles["drawer--open"]);
    } else {
      document.getElementById("drawer").classList.add(styles["drawer--open"]);
    }
  }

  render() {
    return (
      <header className={styles.header} id="navbar">
        <nav>
          <div className={styles.left}>
            <button className="button button--square" onClick={this.toggleDrawer}>
              <img alt="Menu" src={HamburgerIcon} />
            </button>

            <div>
              <img alt="INDEX DAO" src={Logo} className={styles.logo} />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles["socials--desktop"]}>
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

            <button className="button" disabled>App (<Countdown date={1642280400000} />)</button>
          </div>
        </nav>

        <div id="drawer" className={styles.drawer}>
          <div>
            <ul>
              <li>
                <a href="https://launch.indexdao.finance" target="_blank" rel="noopener noreferrer">
                  Claim aINDEX
                </a>
              </li>

              <li>
                <a href="/#" className={styles.disabled}>
                  App (<Countdown date={1642280400000} />)
                </a>
              </li>

              <li>
                <a href="https://docs.indexdao.finance" target="_blank" rel="noopener noreferrer">
                  Docs
                </a>
              </li>

              <li>
                <a href="https://docs.indexdao.finance/tokenomics" target="_blank" rel="noopener noreferrer">
                  Tokenomics
                </a>
              </li>

              <li>
                <a href="https://docs.indexdao.finance/basics/faq" target="_blank" rel="noopener noreferrer">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#roadmap" onClick={this.toggleDrawer}>
                  Roadmap
                </a>
              </li>

              <li>
                <a href="#team" onClick={this.toggleDrawer}>
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.socials}>
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
        </div>
      </header>
    );
  }
}

export default Header;
