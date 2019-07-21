# React Cash Machine

Example project using React hooks and TypeScript for UI. Server using: NodeJs, Express & TypeScript.

## Project structure

Project consists of server side api - in `api` folder and client ui part in `cash-machine-ui` folder.

## API

Api project is using:

- Node JS
- TypeScript
- Express
- Jest & Supertest - for unit testing
- Webpack - for project build
- Prettier - for auto-formating

Api project structure:

- api
  +-- src - contains main files
  +-- tests - contains tests
  +-- build - output files built by webpack
  +-- node_modules - dependecies

  Spliting requested cash amount into bank notes is done in: api/src/cashService.ts

### To build & run use:

`cd ./api/`
`npm run start:dev`

This will start the project in development mode.
CrossEnv library is used to handle both Windows & Linux OS.

Server will start at http://localhost:3001

### Running API unit tests

Inside `api` run following command:
`npm run test`

Some error logs will be displayed in console, this is expected as throwing exceptions is done in one of tests.

## UI

Cash-Machine-UI project is using:

- React with Hooks
- TypeScript
- React-scripts for building
- Jest, Enzyme for unit testing
- Prettier - for formatting

Project structure:

- cash-machine-ui
  - src - main directory of the app
    +-- components - React components
    +-- services - access to API
  - public - static resources for the web page
  - build - contains output files
  - tests

### Running

Before running UI please start-up the **_api server_** on localhost port 3001 (default).

To build and run in development mode use:
`cd cash-machine-ui`
`npm run start`

To build in production mode run:
`cd cash-machine-ui`
`npm run build`
Serve `build` folder with some static web-server, i.e.:
`serve -s build`

### Testing

The plan was to use Jest & Enzyme to test the UI project.
Unfortunately I've run out of time to implement those.
This will be done in version 2.0.
