const debug = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === "production";

module.exports = {
  basePath: prod ? "/nextjs-portfolio" : "",
  reactStrictMode: true,
  assetPrefix: !debug ? "./" : "",
};
