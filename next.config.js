/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = {
  // basePath: "/home",

  async rewrites() {
    return [
      {
        source: "/Home",
        destination: "https://cooler-power.webflow.io/",
      },
      {
        source: "/products",
        destination: "https://cooler-power.webflow.io/products",
      },
      {
        source: "/products/:slug",
        destination: "https://cooler-power.webflow.io/products/:slug",
      },
      {
        source: "/products/:slug/:slug",
        destination: "/customizer/:slug",
      },
    ];
  },
};
