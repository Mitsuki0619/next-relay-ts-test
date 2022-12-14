const webpack = require("webpack")

module.exports = {
  experimental: { esmExternals: true },
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Ensures no server modules are included on the client.
      config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: /lib\/server/ })
      );
    }

    return config;
  },
};