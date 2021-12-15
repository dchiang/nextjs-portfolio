const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const { ON_GITHUB_PAGES } = process.env;

const debug = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === "production";

const definePrefix = () => {
  let prefix = "";
  if (ON_GITHUB_PAGES) {
    prefix = "/nextjs-portfolio/";
  } else if (!debug) {
    prefix = "./";
  }
  return prefix;
};

const definePublicPath = () => {
  let publicPath = "";
  if (ON_GITHUB_PAGES) {
    publicPath = "/nextjs-portfolio/_next/static/images/";
  } else {
    publicPath = "./_next/static/images/";
  }
  return publicPath;
};

const basePath = ON_GITHUB_PAGES || prod ? "/nextjs-portfolio" : "";
const assetPrefix = definePrefix();
const imagesPublicPath = definePublicPath();
const nextConfig = {
  basePath,
  assetPrefix,
  reactStrictMode: true,
  optimizeFonts: false,
};

module.exports = withPlugins([
  [
    optimizedImages,
    {
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true,
      },
      imagesPublicPath: imagesPublicPath,
      optimizeImagesInDev: true,
      svgo: {},
      responseive: true,
      optimizeImages: true,
    },
  ],
  nextConfig,
]);

console.log("process.env.NODE_ENV: " + process.env.NODE_ENV);
console.log("nextConfig: " + JSON.stringify(nextConfig));
console.log("module.exports: " + JSON.stringify(module.exports));
