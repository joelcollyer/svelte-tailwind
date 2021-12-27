const production = !process.env.ROLLUP_WATCH;

module.exports = {
  theme: {},
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production, // disable purge in dev
  },
};
