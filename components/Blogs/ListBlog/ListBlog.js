import { connect } from "react-redux";
import Link from "next/link";
import slug from "slug";
import {
  listBlogFromDatabase,
  removeBlogFromDatabase,
} from "../../../actions/blogs";
import { formatDistanceToNowStrict } from "date-fns";
import { useEffect } from "react";

const ListBlog = ({ dispatch, myBlogs }) => {
  useEffect(() => {
    dispatch(listBlogFromDatabase());
  }, []);
  return (
    <div>
      {myBlogs.map((blog) => (
        <li key={blog.id}>
          {blog.title}
          <Link
            href="/profile/[slug]/[id]"
            as={`/profile/${slug(blog.title)}/${blog.id}`}
          >
            Edits
          </Link>
          <button
            onClick={() => {
              dispatch(removeBlogFromDatabase(blog.id));
            }}
          >
            Delete
          </button>
          {formatDistanceToNowStrict(new Date(...blog.date))} ago
        </li>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  myBlogs: state.blogs,
});

export default connect(mapStateToProps)(ListBlog);
