import BlogForm from '../BlogForm/BlogForm'
import { useRouter } from 'next/router'

const AddBlog = () => {
  
  const router = useRouter()
  return (
    <div>
      <h2>Add Blog</h2>
      <BlogForm />
    </div>
  )
}

export default AddBlog
