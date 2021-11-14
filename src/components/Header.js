import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Head from "next/head";

const Header = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="../pictures/favicon.ico" />
    </Head>
  );
};

export default Header;