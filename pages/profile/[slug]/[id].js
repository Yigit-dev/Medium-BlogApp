import Layout from "../../../components/Layout/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import EditBlog from "../../../components/Blogs/EditBlog/EditBlog";
import PrivateRoute from "../../../components/Route/PrivateRoute";

const EditBlogPage = ({ isAuthenticated }) => {
  const router = useRouter();
  const id = router.query.id;
  const render = (
    <Layout>
      <EditBlog id={id} />
    </Layout>
  );
  return isAuthenticated ? render : null;
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute(EditBlogPage));
