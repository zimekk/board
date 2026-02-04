import env from "dotenv";
import { dirname } from "node:path";
import path from "path";
import webpack from "webpack";

env.config({ path: path.resolve(__dirname, "../../.env") });

export default (_env, { mode }, dev = mode === "development") => ({
  target: "web",
  devtool: dev ? "eval-cheap-source-map" : "source-map",
  entry: {
    polyfills: [
      require.resolve("babel-polyfill"),
      require.resolve("whatwg-fetch"),
    ],
    main: require.resolve("./src"),
    // : require.resolve("./src"),
    sw: require.resolve("./src/service-worker"),
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              esModule: false,
              // https://github.com/webpack-contrib/css-loader?tab=readme-ov-file#modules
              modules: {
                exportLocalsConvention: "asIs",
              },
            },
          },
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(mp3|ogg|png|avi|woff2?)$/,
        use: ["file-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
          plugins: [].concat(false ? "react-hot-loader/babel" : []),
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      events: "events",
      // "react-dom": "@hot-loader/react-dom",
    },
    // https://webpack.js.org/configuration/resolve/#resolvefallback
    fallback: {
      buffer: require.resolve("buffer"),
      stream: require.resolve("stream-browserify"),
    },
  },
  output: {
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      API_URL: "",
      MEDIA_URL: "",
      MQTT_URL: "",
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    // https://webpack.js.org/plugins/copy-webpack-plugin/
    new (require("copy-webpack-plugin"))({
      patterns: [
        { from: require.resolve("./src/assets/manifest.json") },
        { from: require.resolve("./src/assets/audio.json"), to: "api/[name]" },
        { from: require.resolve("./src/assets/delayed.json"), to: "[name]" },
        { from: require.resolve("./src/assets/video.json"), to: "[name]" },
        {
          context: dirname(require.resolve("@dev/ext/package")),
          from: "dist/*.zip",
          to: "[name][ext]",
          noErrorOnMissing: true,
        },
      ],
    }),
    // https://github.com/jantimon/favicons-webpack-plugin#basic
    // new (require("favicons-webpack-plugin"))({
    //   logo: require.resolve("./src/assets/favicon.ico"),
    //   // https://web.dev/add-manifest/
    //   // https://felixgerschau.com/how-to-make-your-react-app-a-progressive-web-app-pwa/#adding-a-manifest-file
    //   manifest: require.resolve("./src/assets/manifest.json"),
    //   mode: "light",
    // }),
    // https://webpack.js.org/plugins/html-webpack-plugin/
    new (require("html-webpack-plugin"))({
      title: require("./src/assets/manifest").name,
      excludeChunks: ["sw"],
      favicon: require.resolve("./src/assets/favicon.ico"),
    }),
    // !dev &&
    //   new (require("workbox-webpack-plugin").InjectManifest)({
    //     swSrc: require.resolve("./src/service-worker"),
    //     swDest: "sw.js",
    //   }),
  ].filter(Boolean),
});
