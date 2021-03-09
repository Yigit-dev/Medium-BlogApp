import { connect } from 'react-redux'
import PrivateRoute from '../components/Route/PrivateRoute'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'

const ProfilePage = ({isAuthenticated,myBlogs}) => {
  const render = (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>
      <h1>Profile</h1>
      <h2>My Blog</h2>
      {
        myBlogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))
      }

    </Layout>
  )
  
  return isAuthenticated ? render : null
}

const mapStateToProps = state => ({ 
  isAuthenticated: !!state.auth.uid,
  myBlogs: state.blogs

})

export default connect(mapStateToProps)(PrivateRoute(ProfilePage))