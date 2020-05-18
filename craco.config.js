const CracoLessPlugin = require("craco-less");

/* craco.config.js */
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: { "@primary-color": "#1DA57A" },
          javascriptEnabled: true,
        },
      },
    },
  ],
};
