import app from 'firebase/app';
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

    // bind instance methods
    this.doCreateUserWithEmailAndPassword = this.doCreateUserWithEmailAndPassword.bind(this);
    this.doSignInWithEmailAndPassword = this.doSignInWithEmailAndPassword.bind(this);
    this.doSignOut = this.doSignOut.bind(this);
    this.doPasswordReset = this.doPasswordReset.bind(this);
    this.doPasswordUpdate = this.doPasswordUpdate.bind(this);
  }

  /**
   * Method that enables registration of a user in the application using their email and password
   * @param {string} email - The user's email address
   * @param {string} password - The user's password
   */
  doCreateUserWithEmailAndPassword(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * SignIn/Login method
   * @param {string} email - The user's email address
   * @param {string} password - The user's password
   */
  doSignInWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Signs out the currently logged in user
   */
  doSignOut() {
    return this.auth.signOut();
  }

  /**
   * Reset user's password
   * @param {string} email - The email to send the password reset link to 
   */
  doPasswordReset(email) {
    return this.auth.sendPasswordResetEmail(email);
  }

  /**
   * Update the user's password
   * @param {string} password - The new password
   */
  doPasswordUpdate(password) {
    return this.auth.currentUser.updatePassword(password);
  }
}

export default Firebase;