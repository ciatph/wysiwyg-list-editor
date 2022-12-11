### wysiwyg-list-editor server

Simple Express server for `wysiwyg-list-editor`.

## Requirements

The following dependencies are used for this project's localhost development environment. Feel free to use other dependency versions as needed.

1. Windows 10 OS
2. nvm for Windows v1.1.9
3. NodeJS 16.14.2 installed using nvm
   - node v16.14.2
   - npm v8.5.0
4. MongoDB Community Edition (for Windows)
  - version 4.4.0
  - architecture: x86_64

## Installation

1. Clone this repository.<br>
`https://github.com/weaponsforge/todo-next.git`

2. Go to the /server directory and install dependencies.<br>
`npm install`

3. Set up the environment variables. Create a `.env` file inside the **/server** directory with reference to the `.env.example` file.


| Variable Name   | Description                                                                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ALLOW_CORS      | Allow Cross-Origin Resource Sharing (CORS) on the API endpoints.<br><br>Default value is `1`, allowing XHR access to domains listed in `ALLOWED_ORIGINS`.<br>Setting to `0` will make all endpoints reject XHR requests from all domains, but allow requests from Postman. |
| ALLOWED_ORIGINS | IP/domain origins in comma-separated values that are allowed to access the API if `ALLOW_CORS=1`.<br>Include `http://localhost:3000` by default to allow CORS access to the **/client** app.                                                                               |
| MONGO_URI       | MongoDB connection string.<br>Default value uses the localhost MongoDB connection string.                                                                                                                                                                                  |

## Available Scripts

### `npm start`

Run the express server for production mode.

### `npm run dev`

Run the server for development mode using [nodemon](https://www.npmjs.com/package/nodemon).

### `npm run lint`

Lint the server JavaScript source codes.

### `npm run lint:fix`

Fix JavaScript lint errors.

@ciatph<br>
20221211
