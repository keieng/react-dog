const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TailwindCSS = require("tailwindcss");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "main.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/react"] },
          },
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
      },
      // {
      //   test: /\.(sass|scss)$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //     },
      //     {
      //       loader: "css-loader",
      //       options: {
      //         url: false,
      //         sourceMap: true,
      //         importLoaders: 2,
      //       },
      //     },
      //     {
      //       loader: "postcss-loader",
      //       options: {
      //         postcssOptions: {
      //           plugins: [
      //             ["autoprefixer", { grid: true }],
      //             ["cssnano", { preset: "default" }],
      //           ],
      //         },
      //       },
      //     },
      //     {
      //       loader: "sass-loader",
      //       options: { sourceMap: true },
      //     },
      //   ],
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [TailwindCSS],
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: "web",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./main.css",
    }),
  ],
};
