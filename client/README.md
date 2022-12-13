## wysiwyg-list-editor / client

This directory will contain the web user interfaces for interacting with the **wysiwyg-list-editor** CRUD API's.

## Requirements

The following dependencies are used for this project's localhost development environment. Feel free to use other dependency versions as needed.

1. Windows 10 OS
2. nvm for Windows v1.1.9
3. NodeJS 16.14.2 installed using nvm
   - node v16.14.2
   - npm v8.5.0

### Core Libraries/Frameworks

(See package.json for more information)

1. NextJS 13.0.6
2. React 18.2.0
3. Material-UI v5.10.1

## Installation

1. Install dependencies.<br>
`npm install`

2. Set up the environment variables. Create a `.env`, `.env.local` and a `.env.development` files inside the root project directory with reference to the `.env.example` file.<br>

   | Variable Name         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
   | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | NEXT_PUBLIC_BASE_PATH | Root directory path name that NextJS uses for assets, media and client-side routing for the app.<br><br>Set its value to blank `''` when working on development mode in localhost.<br><br>Set its value to the sub-directory name where the exported NextJS app is to be deployed, i.e. `/<YOUR_REPOSITORY_NAME>` when<br> deploying on a repository (sub-directory) of a root GitHub Pages site, i.e, on `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>` |

## Usage

1. Run the project in development mode.<br>
`npm run dev`
2. Launch the development website from:<br>
`http://localhost:3000`
3. Check for lint errors.
   - `npm run lint` (check lint errors)
   - `npm run lint:fix` (fix lint errors)
5. Export the static website.<br>
`npm run export`


@ciatph<br>
20221211
