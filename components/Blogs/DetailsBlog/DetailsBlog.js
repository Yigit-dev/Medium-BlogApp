import { useState } from "react";
import { connect } from "react-redux";

const DetailsBlog = ({ blog }) => {
  const selectedBlog = blog[0];
  if (!selectedBlog) {
    return null;
  }
  return (
    <div>
      <h2>{selectedBlog.title}</h2>
      <p>{selectedBlog.body}</p>
    </div>
  );
};

const mapStateToProps = (state, { id }) => ({
  blog: state.blogs.filter((blog) => blog.id === id),
});
export default connect(mapStateToProps)(DetailsBlog);
