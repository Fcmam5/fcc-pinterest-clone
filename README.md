# FreeCodecamp's Pinterest clone project

This is `Pinterest clone` project, for [Build a Pinterest Clone, FreeCodecamp challenge](https://www.freecodecamp.org/challenges/build-a-pinterest-clone). The project is based on [mini-express-boilerplate](https://github.com/Fcmam5/mini-express-boilerplate), uses [VueJS 2]() with [Masonry.js](http://masonry.desandro.com/) and it's hosted on Heroku for trying and testing, URL: [https://fcc-pinterest-clone-fcmam5.herokuapp.com](https://fcc-pinterest-clone-fcmam5.herokuapp.com/)

## User stories
* **User Story:** As an unauthenticated user, I can login with Twitter.
* **User Story:** As an authenticated user, I can link to images.
* **User Story:** As an authenticated user, I can delete images that I've linked to.
* **User Story:** As an authenticated user, I can see a Pinterest-style wall of all the images I've linked to.
* **User Story:** As an unauthenticated user, I can browse other users' walls of images.
* **User Story:** As an authenticated user, if I upload an image that is broken, it will be replaced by a placeholder image. (can use jQuery broken image detection)

## Running this project

### Prerequisites
* [MongoDB](https://docs.mongodb.com/manual/installation/)
* [NodeJs](http://nodejs.org/download/)

### Setup

```shell
# Clone this repository
git clone https://github.com/Fcmam5/fcc-pinterest-clone && cd fcc-pinterest-clone

# Copy '.env.example' to '.env' then edit this new file using your Facebook/Twitter API keys, and your DB URL
cp .env.example .env && nano .env

# Install node packages with NPM (you can use Yarn instead)
npm install

# Run the project
npm start
```


## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
