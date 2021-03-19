// AddBlog & EditBlog Form...
import { addBlogToDatabase, editBlogFromDatabase } from "../../../actions/blogs"
import { connect } from 'react-redux'
import { useState } from "react"
import { useRouter } from 'next/router'

const BlogForm = ({dispatch,blog}) => {
  const [title,setTitle] = useState(blog ? blog.title : '')
  const [body,setBody]   = useState(blog ? blog.body : '')
  const router = useRouter()
  
  const onSubmit = e => {
    e.preventDefault()
    if(!!blog) {
      dispatch(editBlogFromDatabase(blog.id,{title,body}))
      router.push('/profile')
    } else {
      dispatch(addBlogToDatabase({title,body}))
      router.push('/profile')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="enter title"/>
        </div>
        <div>
          <textarea value={body} onChange={e => setBody(e.target.value)}  placeholder="enter body"></textarea>
        </div>  
        <div>
          <button type="submit">Save Changes</button>
        </div>
      </form>    
    </div>
  )
}

export default connect()(BlogForm)