import {login,loginAction,logoutAction} from '../../actions/auth'
import {firebase} from '../../firebase/firebaseConfig'
import {connect} from 'react-redux'
import {useRouter} from 'next/router'
import styles from './Login.module.css'

const Login = ({dispatch}) => {
  
  firebase.auth().onAuthStateChanged(user => {
    user ? dispatch(loginAction(user.uid)) : dispatch(logoutAction())
  })

  const router = useRouter()
  
  return (
    <div className={styles.Login}>
      <h1>Login</h1>
      <button onClick={() => login('Google').then(() => router.push('/'))}>Google | Login</button>
      <button onClick={() => login('Facebook').then(() => router.push('/'))}>Facebook | Login</button>
    </div>
  )
}

export default connect()(Login)


