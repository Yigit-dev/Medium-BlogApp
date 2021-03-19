import { connect } from "react-redux"
import { removeBlogFromDatabase } from "../../../actions/blogs"
import Link from 'next/link'
import slug from 'slug'

const ListBlog = ({dispatch,myBlogs}) => {
  return (
    <div>
      {
        myBlogs.map(blog => (
          <li key={blog.id}>
            {blog.title}
            <Link href="/profile/[slug]/[id]" as={`/profile/${slug(blog.title)}/${blog.id}`}>Edits</Link>
            <button 
              onClick={() => {
              dispatch(removeBlogFromDatabase(blog.id))
            }}>
              Delete
            </button>
          </li>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => ({
  myBlogs: state.blogs
})

export default connect(mapStateToProps)(ListBlog)
