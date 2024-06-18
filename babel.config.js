
module.exports = {
  presets: [
    'module:metro-react-native-babel-preset', // This preset is used for React Native
    '@babel/preset-env', // This preset allows you to use the latest JavaScript features
    '@babel/preset-react' // This preset is for React
  ],
  plugins: [
    ["@babel/plugin-transform-class-properties", { "loose": true }],
    ["@babel/plugin-transform-private-property-in-object", { "loose": true }],
    '@babel/plugin-proposal-class-properties', // This plugin is for class properties
    '@babel/plugin-transform-runtime' // This plugin helps with async/await and other features
  ]
};




