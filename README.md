# React Native Boilerplate

> React Native Boilerplate - Redux, React Native Router Flux, Jest, ESLint

## Shots

Comming soon!

## Included

* [React](https://github.com/facebook/react)
* [React Native](https://github.com/facebook/react-native) v0.41.2
* [React-Native-Router-Flux](https://github.com/aksonov/react-native-router-flux)
* [Redux](https://github.com/reactjs/redux) 
* [Redux-Persist](https://github.com/rt2zz/redux-persist)
* [Redux-Thunk](https://github.com/gaearon/redux-thunk)
* [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools)
* [Babel](https://github.com/babel/babel)
* [ESLint](https://eslint.org) && [ESLint AirBnb Config](https://github.com/airbnb/javascript)
* [Jest](https://facebook.github.io/jest/)

* [Apollo](http://dev.apollodata.com/react/react-native.html)(Optional)  [see here]()

## Installation

Install and setup react-native [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

```bash
$ npm install -g react-native-cli
$ npm install
```

Clone boilerplate

```bash
$ git clone git@github.com:chitezh/react-native-boilerplate.git
$ cd react-native-boilerplate
$ npm install
```
## Development

#### Start local server

```bash
$ react-native start
```

#### Run
```
$ react-native run-android
```
or
```
$ react-native run-ios
```

## DevTools

 [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools)

## Test (Jest and Eslint)

```bash
$ npm test
```

This will run the script below, linting using ESLint and then, test using Jest

```
  "scripts": {
    ...
    "lint": "eslint . --ext .js,.jsx",
    "pretest": "npm run lint --silent",
    "test": "jest"
  },
```

## LICENSE

[MIT](LICENSE)