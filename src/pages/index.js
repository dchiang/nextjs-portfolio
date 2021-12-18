import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function Home() {
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
          <Skills className="column is-3 is-offset-1 has-border-1" />
          <Experience className="column is-7 ml-4 pl-4 has-border-1" />
        </div>
      </Layout>
      <Footer />
    </section>
  );
}
