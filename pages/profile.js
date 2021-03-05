import { connect } from 'react-redux'
import PrivateRoute from '../components/Route/PrivateRoute'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'

const ProfilePage = ({isAuthenticated}) => {
  
  const render = (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>
      <h1>Profile</h1>
      <h2>My Blog</h2>
    </Layout>
  )
  
  return isAuthenticated ? render : null
}

const mapStateToProps = state => ({ isAuthenticated: !!state.auth.uid})

export default connect(mapStateToProps)(PrivateRoute(ProfilePage))