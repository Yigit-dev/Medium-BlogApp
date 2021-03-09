
import Navigation from "../Navigation/Navigation"
import styles from './Layout.module.css'

const Layout = ({children}) => {



  return (
    <div className={styles.container}>
      <Navigation />
      {children}
    </div>
  )
}


export default Layout
