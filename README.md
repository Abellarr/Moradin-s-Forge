

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# React Fullstack MVP

![Dwarf working on a blade at a forge] (./src/assets/Header Background.png)

## Description
This project is a fullstack single-page web app built with React, Node, Express and Postgres, which displays item information (weapons, armor, and magic items) from Dungeons and Dragons 5e and allows for custom magic item creation.

---

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license) 

---

## Installation
This project was developed and ran locally on my machine. If you are installing on your machine, you'll need Docker (or something similar) to host the Postgres database. The React app was built with Vite, using "npm create vite@latest".

After cloning the repository, run "npm install" in the main folder to get the dependencies for the frontend files and React. After that, use the command line to move into the /Server folder and run "npm install" again to install the packages for the backend. Once those are installed, you'll need to configure your Docker to set up a container for the database (I used a local docker-compose.yaml to configure my containers). I've included a migration.sql file to create the table and seed some starter information into the table if you want to use it. 

Once the database is setup, type "nodemon /Server/expressServer.js" in the command line to start the server. The server defaults to port 5050 but can be changed to any port you would like. If you change ports, you will have to reflect that in all of the url routes in the expressServer.js file to "/localhost:**new port number**/". Once the server is listening, move back up into the main folder (or open a new terminal in the main folder), and type "npm run dev" to start React on the local machine. Vite should default to port 5173, so open your browser and navigate to "localhost:5173/index.html". This app is a single-page app so it won't navigate from here (all components on screen will update as you interact with them).

---

## Usage
This app is useful for Dungeon Masters or players who want an easy to use format to search for items to use in D&D 5e campaigns. There is also an Item Creator module that allows users to view, create, modify, and delete custom magical items from the database, allowing DMs and players access to a valuable resource to grow the fun and originality of their campaigns, both official and homebrew.

---

## Contributors
David Ortiz (davidlortiz610@gmail.com | https://github.com/Abellarr)

---

## Tests
RESTful routes initially tested using Postman, and later tested using the web app. All are working as of latest commit.

---

## Questions
davidlortiz610@gmail.com

---

## License
The license used for this project is MIT

