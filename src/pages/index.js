import styles from "../../styles/Home.module.css";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Head from "next/head";

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
      </Layout>
      <Footer />
    </section>
  );
}
