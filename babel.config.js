const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "50",
        chrome: "64",
        safari: "11.1",
      },

      useBuiltIns: "entry",
    },
  ],
];

module.exports = { presets };
