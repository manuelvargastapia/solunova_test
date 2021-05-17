# Solunova test project

This is a web app built with [ReactJS](https://reactjs.org/), [ExpressJS](https://expressjs.com/), [PostgreSQL](https://www.postgresql.org/), and [JWT](https://jwt.io/). It's part of the **Solunova** application process.

### Overview

The app consists of a register and login form, and a private Home page. Focused on authentication with JWT.

Each of the different services, frontend, backend, and database, is an independent [Docker](https://docs.docker.com/) container. The whole project can be run with the [Docker Compose](https://docs.docker.com/compose/) tool.

The scope of the app is limited. It only allows creating users and login, while the Home page only shows the user's info. The JWT token is stored in Local Storage for its inspection.

### Showcase video

[![Horizon Zero Dawn authentication app showcase](https://img.youtube.com/vi/GgGqO_oA4KE/0.jpg)](https://www.youtube.com/watch?v=GgGqO_oA4KE)

### Inspiration

The main concept is based on the *Horizon Zero Dawn* videogame. The images shown on the Login page are screenshots taken by myself during my previous gameplays. Other assets were extracted from the internet and adapted properly.

The Home page is inspired by [Jacob's design](https://dribbble.com/shots/13042302-Horizon-Zero-Dawn-Website-Concept).

### Run

1. Install [Git LFS](https://git-lfs.github.com/). This project keeps track of [frontend/public/videos/trailer.mp4](frontend/public/videos/trailer.mp4) with Git LFS, so you'll need to install it to be able to include the trailer video when cloning the repo. Alternatively, you could simply download the file from Github and make the replacement manually.
2. Clone the repo: `git clone git@github.com:manuelvargastapia/solunova_test.git`.
3. Build the images and run all the containers jointly: `sudo docker-compose up`.*
4. Visit http://localhost:5000 to see the app.
5. When finish, tear down the containers: `sudo docker-compose down`.

Use the following settings to connect to the database:

- Hostname: **localhost**
- Port: **2345**
- Database name: **solunova_test**
- Username: **postgres**
- Password: **password**

During development, tune the setting in [backend/src/config/db_config.js](backend/src/config/db_config.js). Note that a random port **2345** has been used to avoid potential conflict with running instances; see [docker-compose.yml](docker-compose.yml).

*Note that `sudo` is not required if [this optional configuration](https://docs.docker.com/engine/install/linux-postinstall/) is implemented.
