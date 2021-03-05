import Link from 'next/link'
import {logout} from '../../actions/auth'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import styles from './Navigation.module.css'

const Navigation = ({isAuthenticated}) => {

  const router = useRouter()

  return (
    <nav className={styles.Navigation}>
      <Link href="/"><a>Home</a></Link>
      <Link href="/createblog"><a>Create Blog</a></Link>
      <Link href="/profile"><a>Profile</a></Link>
      <Link href="/login"><a>Login</a></Link>
      {isAuthenticated && <button onClick={() => logout().then(() => router.push('/'))}>Logout</button>}
    </nav>
  )
}

const mapStateToProps = state => ({isAuthenticated: !!state.auth.uid})

export default connect(mapStateToProps)(Navigation)
