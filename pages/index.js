import Head from 'next/head'
import Layout from '../components/Layout/Layout'

const Home = () =>{
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog home</h1>
    </Layout>
  )
}

export default Home