import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Skills from "../components/Skills";
import { PortfolioContext } from "../context/PortfolioContext";
import { useContext } from "react";

export default function Home() {
  const { portfolio } = useContext(PortfolioContext);
  return (
    <section>
      <Head>
        <title>Daniel Chiang Guerrero Portfolio</title>
        <meta name="description" content="Portfolio developed using next js" />
        <link rel="icon" href="../pictures/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <div className="columns mt-4">
          <Skills
            className="column is-3 is-offset-1 has-border-1"
            languagesUsed={portfolio.languages}
          />
        </div>
      </Layout>
      <Footer />
    </section>
  );
}
