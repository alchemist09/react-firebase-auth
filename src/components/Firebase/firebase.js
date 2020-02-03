import { app } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  /**
   * Method that enables registration of a user in the application using their email and password
   * @param {string} email - The user's email address
   * @param {string} password - The user's password
   */
  doCreateUserWithEmailAndPassword(email, password) {
    this.auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * SignIn/Login method
   * @param {string} email - The user's email address
   * @param {string} password - The user's password
   */
  doSignInWithEmailAndPassword(email, password) {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Signs out the currently logged in user
   */
  doSignOut() {
    this.auth.signOut();
  }
}

export default Firebase;