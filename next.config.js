module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1400],
    unoptimized: true,
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
