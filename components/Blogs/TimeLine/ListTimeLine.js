import { connect } from "react-redux"
import { useEffect } from "react"
import { publicBlogFromDatabase } from "../../../actions/blogs"
import { formatDistanceToNowStrict } from 'date-fns'
import Link from "next/link"
import slug from 'slug'

const ListTimeLine = ({publicBlogs,dispatch}) => {
  useEffect(() => dispatch(publicBlogFromDatabase()), [])
  return (
    <div>
      <h1>List Time Line</h1>
      {publicBlogs &&
      <ul>
        {
          publicBlogs.map(blog => (
            <li key={blog.id}>
              {console.log(blog)}
              {blog.title}
              <Link href="/home/[slug]/[id]" as={`/home/${slug(blog.title)}/${blog.id}`}>Details</Link>
              {formatDistanceToNowStrict(new Date(...blog.date))} ago
            </li>
          ))
        }
      </ul>
      } 
    </div>
  )
}

const mapStateToProps = state => ({
  publicBlogs: state.blogs.filter(blog => !blog.privatePost)
})

export default connect(mapStateToProps)(ListTimeLine)