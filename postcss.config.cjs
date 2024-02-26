module.exports = (cfg) => {

  const devMode = (cfg.env === "development");

  return {
    map : devMode ? "inline" : null,
    plugins: [
      require('tailwindcss')(),
      require('autoprefixer')(),
      devMode ? null : require('cssnano')() ,
    ],
  }
};