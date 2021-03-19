import {firebase, googleAuthProvider, facebookAuthProvider} from '../firebase/firebaseConfig'

export const login = authType => {
  switch (authType) {
    case 'Google': return firebase.auth().signInWithPopup(googleAuthProvider)
    case 'Facebook': return firebase.auth().signInWithPopup(facebookAuthProvider)
    default: return null
  }
}

export const loginAction = uid => ({
  type: 'LOGIN',
  uid
})

export const logout = () => firebase.auth().signOut()

export const logoutAction = () => ({ type: 'LOGOUT' })