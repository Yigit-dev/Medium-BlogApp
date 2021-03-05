import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)

// ! Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// **DEBUG**
!firebase.apps.length ?  firebase.initializeApp(firebaseConfig) : firebase.app()

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

export { database as default, googleAuthProvider,facebookAuthProvider, firebase }