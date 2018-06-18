import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'
import {
    REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_MSG_SENDER_ID
} from 'react-native-dotenv'

console.log(process.env)

const app = firebase.initializeApp({
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: `${REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: `${REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: REACT_APP_FIREBASE_MSG_SENDER_ID,
})

const db = firebase.database(app)
const base = Rebase.createClass(db)

export default base
