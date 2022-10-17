module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "amd": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        // "plugin:import/recommended",
        // "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        "jsx-a11y"
    ],
    "rules": {
        "react/display-name": "off",
        "react/prop-types": "off",
        "no-unused-vars": "off",
    }
}
