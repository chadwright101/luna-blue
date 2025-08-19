module.exports = {
  images: {
    deviceSizes: [425, 800, 1400],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "the-wright-designs-website-images.s3.af-south-1.amazonaws.com",
        port: "",
        pathname: "/luna-blue/**",
      },
    ],
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
};
