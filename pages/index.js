import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import TimeLine from '../components/Blogs/TimeLine/TimeLine'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog home</h1>
      <TimeLine />
    </Layout>
  )
}

export default Home