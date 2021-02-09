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

## Some notes on architecture decisions

The idea behind this split repo system is that the express application should solely be responsible for responding to API calls. The viewing/rendering logic should be handled entirely on the react side of things.
Dividing responsibilities in this way should allow for a complete decoupling from this back-end and the front-end, allowing for multiple front-end 'view' engines to access the same server. As a result, once complete
this project should allow for a robust way to test out new front-end technologies, with a robust, consistent, trusted back-end. This is the eventual goal. Likewise, we can use the front-end technologies to connect with a different
backend system, to allow us to explore that space without concern of front-end technologies.

As it stands, our express app will only contain explicit Model and Controller logic from the MVC architecture. In order to maintain backwards compatibility with the API specified below, if necessary, we may wind up implementing some
'view' logic in the express app that just transforms data into the expected structure for the API. But as of now, I don't believe that to be necessary.

### Actual implementation details

- **Individual games will be controlled via websockets** -- Allowing for real-time two way communication between the server and the client. Socket.IO was considered, but ultimately ruled out for education reasons. While the extra features of Socket.IO could be useful (heartbeating, automatic reconnecting, fallback methods if websockets are not available, etc), the goal here is to learn the underlying websocket technology, rather than a framework that has, generally speaking, fallen out of favor.

- **User data will be stored in MongoDB, and accessed via the Mongoose ORM** -- the simplicity here outweighs any potential performance hit we may take. At the moment, the only data we're storing in a persistant way is basic user auth data, along with some win/loss data, and potentially friends lists. This data, on the whole, isn't terribly 'relational', and the added complexity of using a SQL database outweighs the potential performance benefits.

- **User authentication system is TBD**


## API Specifications

**THIS SECTION IS A WORK IN PROGRESS, AND SUBJECT TO BREAKING CHANGES UNTIL SOLIDIFIED**

### `/api/user`

| endpoint | method | details |
| --- | --- | --- |
|`/api/user/{id}` | GET | fetch data associated with the indicated user. The full extent of the data returned will depend on what data the logged in user has access to | 
| `/api/user/{id}` | PUT | Update a given user's data.  |
| `/api/user/` | POST | Create a new user |
| `/api/user/{id}` | DELETE | Remove a user from the system |


## A note on some files in this repo

- `.eslintrc.js` is simply some rules that the linter follows when going through your code to ensure consistent code standards across contributers