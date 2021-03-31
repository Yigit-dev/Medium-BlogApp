import Layout from "../../../components/Layout/Layout"
import Head from 'next/head'
import { useRouter } from "next/router"
import DetailsBlog from "../../../components/Blogs/DetailsBlog/DetailsBlog"

const BlogDetailsPage = () => {
  const router = useRouter()
  const id = router.query.id
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DetailsBlog id={id}/>
    </Layout>
  )
}

export default BlogDetailsPage