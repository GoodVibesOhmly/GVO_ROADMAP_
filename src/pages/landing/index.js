import React from "react";
import styles from "./styles.module.css";
import {
  About,
  Bonding,
  Hero,
  Roadmap,
  Team,
  WhitelistBanner,
} from "./components/";
import {
  Footer,
  Header,
} from "../../components/";

class Landing extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <Header />
        <Hero />
        <WhitelistBanner />
        <About />
        <Bonding />
        <Roadmap />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default Landing;
