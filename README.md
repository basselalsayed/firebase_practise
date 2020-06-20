# Outline

This repository can be used as a boilerplate for a react and firebase project. It offers easy to customise screens built with [bootstrap](https://react-bootstrap.github.io/) and higher order component architecture for easy integration with additional features.

Includes:
* Signup (with cloud function firestore user object creatiion)
* Signin
* Routing with authentication and easy to customise authorisation
* Password management screens

# Get Started

* Fork this repository and clone it to your local machine 
* Install dependencies with `yarn`
* Create an env file at the root with `touch .env`
* Set up your own [firebase project](https://firebase.google.com/)
* Install [Firebase CLI](https://firebase.google.com/docs/cli) 
* In the firebase web console, navigate to settings > Project Settings and set up a web app
* Select the config radio button and copy the data into the .env file as below, replacing `12345678foobar` :
  
  `REACT_APP_API_KEY=12345678foobar
  REACT_APP_AUTH_DOMAIN=12345678foobar
  REACT_APP_DATABASE_URL=12345678foobar
  REACT_APP_PROJECT_ID=12345678foobar
  REACT_APP_STORAGE_BUCKET=12345678foobar
  REACT_APP_MESSAGING_SENDER_ID=12345678foobar
  REACT_APP_APP_ID=12345678foobar
  REACT_APP_MEASUREMENT_ID=12345678foobar`

* In the firebase console up cloud firestore and create a collection named `users`
* In your local directory, run `firebase init`: 
  * After running through any required login. In it's current state, the application uses only: 
    * Firestore
    * Functions
    * Hosting
    * Emulators (optional, no emulators for firebaseauthentication)
  * Use an existing project (select your project)
  * Select Javascript for Cloud Functions
  * Install dependencies (notice it is npm not yarn from within the functions directory)

## Deployment
### Production
  * Run `firebase deploy` to publish the project live on your firebase and head to the url it gives you. Repeat everytime you are ready for new features to go live
### Development
  *  `firebase deploy --only functions` to prepare the firestore, then you can serve locally with `yarn start` for hot reload (recommended) or `yarn build`, `firebase serve` (you have to run `yarn build` everytime you make changes)


## Using the [Higher Order Components](https://reactjs.org/docs/higher-order-components.html)

Higher order components help avoid prop drilling by providing context (like a global prop) when necessary, you can find them in the src/components/Firebase and /Session directories. 