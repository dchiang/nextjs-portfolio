import Experience from "../components/Experience";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Embeded = () => {
  const router = useRouter();
  const { page } = router.query;
  const style = {
    display: "block",
    width: "100%",
    height: "100vh",
    border: "none",
    overflowY: "auto",
    overflowX: "hidden",
  };
  return (
    <section>
      <Layout>
        <section className="hero is-small">
          <div className="hero-body"></div>
        </section>
        <iframe
          src={page}
          className="m-0"
          style={style}
          width="100%"
          frameBorder="0"
          scrolling="auto"
          border="none"
        ></iframe>
      </Layout>
    </section>
  );
};

export default Embeded;
