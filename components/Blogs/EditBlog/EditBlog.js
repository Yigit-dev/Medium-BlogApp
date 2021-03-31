import { connect } from "react-redux"
import { removeBlogFromDatabase } from "../../../actions/blogs"
import BlogForm from "../BlogForm/BlogForm"
import { useRouter } from 'next/router'

const EditBlog = ({blog,dispatch}) => {
  const router = useRouter()
  return (
    <div>
      <h1>Edit Blog</h1>
      <BlogForm blog={blog}/>
      <button onClick={() => {
        dispatch(removeBlogFromDatabase(blog.id))
        router.push('/profile')
      }}>
        Delete</button>
    </div>
  )
}

const mapStateToProps = (state,{id}) => ({
  blog: state.blogs.find(blog => blog.id === id)
})

export default connect(mapStateToProps)(EditBlog)
