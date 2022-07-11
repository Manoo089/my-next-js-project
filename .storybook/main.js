const path = require("path");
const stylesPath = path.resolve(__dirname, "../styles/");
const globImporter = require("node-sass-glob-importer");

module.exports = {
  stories: ["../components/**/*.stories.mdx", "../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              importer: globImporter(),
            },
            warnRuleAsWarning: true,
          },
        },
      ],
      include: stylesPath,
    });

    return config;
  },
  typescript: { reactDocgen: false },
};
