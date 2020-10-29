const withOffline = require("next-offline");

nextConfig = {
  images: {
    domains: ["www.datocms-assets.com"],
  },
};

module.exports = withOffline(nextConfig);
