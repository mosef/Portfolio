module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
          "ecmascript": 6,
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
        },
        "sourceType": "module"
    },
    "extends": "airbnb",
    "rules": {
      "function-paren-newline": 0,
    }
};