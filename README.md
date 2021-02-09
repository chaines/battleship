# Battleship

A simple Battleship game, created by the 54th cohort of the Austin campus of Hack Reactor.

## Getting started (in development)

To get this project up and running smoothly, you're going to want to follow the instructions here, as well as the instructions located
in the `battleship-client` repo. This repo only contains server-side code.

**A note here: this repo using the ES6 import/export syntax as a module. This means that, generally, you should be using `import` and `export` rather than `require` and `module.exports`.
If this winds up causing issues in the future, I will refactor**

- Clone this repository:
`git clone https://github.com/chaines/battleship.git`

- Run `npm install`

- Run `npm start`

- You're off to the races.


## Advanced setup

After cloning this repository, you can choose to clone the client repository into a subfolder of this repository called `client`. At that point, you may then run `npm run development` to start both the client and the server in one window.

## A note on some files in this repo

- `.babelrc` sets up babel to be able to properly parse and process React components into valid es5

- `.eslintrc.js` is simply some rules that the linter follows when going through your code to ensure consistent code standards across contributers

- `webpack.config.js` sets up webpack, which is a utility that is (currently) used to run babel and provide a development server. Webpack also provides us the ability to 'proxy' our api development server so that api calls can be made on the same port that our client side development server is running.