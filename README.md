# ESLint + JEST + NPM scripts
It is sample project for ESlint + JEst and NPM scripts configureation

## To check current project

Follow steps below:
- Install dependencies with [npm](https://www.npmjs.com/): `npm install`. Please make sure that you have node > v9. 
- Install dependencies: `npm install`
- After that, you can run any of NPM scripts.

## To re-use current configuration in your project.
Follow steps below:

- Initialize you project as node module v9 by running from project root: `npm init -y`. Please make sure that you have node > 9.
- Install ESLint locally. You can do so using npm: `npm install eslint jest --save-dev`
- You should then set up a configuration file [https://eslint.org/docs/user-guide/getting-started]:
`eslint --init`
Answer questions as below:
```
? How would you like to use ESLint? To check syntax, find problems, and enforce 
code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Where does your code run? (Press <space> to select, <a> to toggle all, <i> to 
invert selection)Browser
? How would you like to define a style for your project? Use a popular style gui
de
? Which style guide do you want to follow? Airbnb (https://github.com/airbnb/jav
ascript)
? What format do you want your config file to be in? JSON
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^4.19.1 || ^5.3.0 eslint-plugin-import@^2.14.0
? Would you like to install them now with npm? Yes
```
As a result you devDependencies in `package.json` should similar with the following:
```
"devDependencies": {
  "eslint": "^5.16.0",
  "eslint-config-airbnb": "^17.1.0",
  "eslint-config-airbnb-base": "^13.1.0",
  "eslint-plugin-import": "^2.17.1",
  "eslint-plugin-jsx-a11y": "^6.2.1",
  "eslint-plugin-react": "^7.12.4",
  "jest": "^24.7.1"
}
```
- Edit `.eslintrc.json` by adding jest to environment and overring rules. As a result your  config should look as below:
```
{
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": "airbnb-base",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-var": 0,
    "prefer-rest-params": 0,
    "prefer-spread": 0
  }
}
```
- Add NPM scripts at `package.json`: 
```
"scripts": {
  "lint": "eslint '*.js'",
  "lint:fix": "eslint '*.js' --fix",
  "pretest": "npm run lint",
  "test": "jest",
  "test:watch": "jest --watchAll"
},
```
- After that, you can run any of NPM scripts:
