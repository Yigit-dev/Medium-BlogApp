import { connect } from 'react-redux'
import PrivateRoute from '../components/Route/PrivateRoute'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'
import AddBlog from '../components/Blogs/AddBlog/AddBlog'

const CreateBlogPage = ({isAuthenticated}) => {
  
  const render = (
    <Layout>
      <Head>
        <title>Create Blog</title>
      </Head>
      <h1>Create Blog</h1>
      <AddBlog />
    </Layout>
  )

  return isAuthenticated ? render : null
}

const mapStateToProps = state => ({ isAuthenticated: !!state.auth.uid})

export default connect(mapStateToProps)(PrivateRoute(CreateBlogPage))
