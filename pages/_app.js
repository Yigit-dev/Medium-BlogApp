import '../styles/globals.css'
import configStore from '../store/configStore'
import {Provider} from 'react-redux'
import {firebase} from '../firebase/firebaseConfig'
import { listBlogFromDatabase } from '../actions/blogs'
import {loginAction,logoutAction} from '../actions/auth'

const store = configStore()

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.dispatch(loginAction(user.uid))
    store.dispatch(listBlogFromDatabase())
  } else {
    store.dispatch(logoutAction())
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
