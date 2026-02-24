import { boot } from 'quasar/wrappers'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

interface FirebaseConfig {
  apiKey: string
  authDomain: string
  databaseURL: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY || '',
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN || '',
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL || '',
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.VUE_APP_FIREBASE_APP_ID || '',
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()


export default boot(({ app }) => {
  app.config.globalProperties.$firebase = firebaseApp
})

export { firebaseApp, auth }
